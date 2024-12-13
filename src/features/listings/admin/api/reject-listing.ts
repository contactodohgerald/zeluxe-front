import { api } from "@/lib/api-client"
import { MutationConfig } from "@/lib/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const rejectListing = ({listingId}:{listingId:string}) => {
    return api.patch(`/admin/reject/listing/${listingId}`);
}

type UseRejectListingOptions = {
    mutationConfig?:MutationConfig<typeof rejectListing>
}

export const useRejectListing = ({
    mutationConfig,
}: UseRejectListingOptions = {}) => {
    const queryClient = useQueryClient()

    const {onSuccess, ...restConfig} = mutationConfig || {}

    return useMutation({
        onSuccess: (...args) => {
            queryClient.refetchQueries({
                queryKey:['admin-listings'],
            });
            onSuccess?.(...args)
        },
        ...restConfig,
        mutationFn:rejectListing
    })
}