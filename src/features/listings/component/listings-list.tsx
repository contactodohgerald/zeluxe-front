import { Spinner } from "@/components/ui/spinner"
import { useListings } from "../api/get-listings"
import { Card } from "antd"
import { MyListingsTabs } from "@/components/ui/dashboard/tabs"

export const ListingsList=()=> {

    const listingsQuery = useListings({})
    
    if(listingsQuery.isLoading) {
        return (
            <div className="flex h-48 w-full items-center jsutify-center">
                <Spinner size="lg"/>
            </div>
        )
    }

    const listings = listingsQuery?.data

    if(!listings) return null;

    return (
        <Card className="mt-4">
        <MyListingsTabs listings={listings?.data as any} />
      </Card>
    )
}