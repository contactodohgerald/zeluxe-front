import { Card } from 'antd';
import { Spinner } from '@/components/ui/spinner';
import { RentalReview } from '@/types/api';
import { formatDate } from '@/lib/utils';
import userAvatar from '@/assets/images/user_avatar.jpg';
import React from 'react';
import { useAdminReview } from '../api/get-review';

export const ReviewView = ({ reviewId }: { reviewId: string }) => {
  const reviewQuery = useAdminReview({ reviewId });
  const review = reviewQuery?.data?.data;

  // console.log('review', review);

  if (reviewQuery.isLoading) {
    <div className="flex h-48 w-full items-center justify-center">
      <Spinner size="lg" />
    </div>;
  }

  if (!review || review?.length === 0) {
    return (
      <Card>
        <p>No Listing Available</p>
      </Card>
    );
  }

  return (
    <>
      <section className="relative pt-4">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-6">
          <div className="">
            <div className="flex items-center">
              <div className="h-[2.93rem] w-[2.93rem] shrink-0 rounded-full">
                <img
                  src={userAvatar}
                  alt=""
                  className="h-[2.93rem] w-[2.93rem] shrink-0 rounded-full"
                />
              </div>
              <h2 className="font-raleway text-[1.01rem] font-bold leading-[1.2rem] tracking-[0.03em]">
                {review?.user?.username}
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-lg font-normal leading-8 text-gray-500">
                {review?.description}
              </p>
            </div>
            <h4 className="font-raleway text-[1.01rem] font-bold leading-[1.2rem] tracking-[0.03em]">
              Other Reviews
            </h4>
            <div className="mb-11 grid grid-cols-12">
              <div className="col-span-12 flex items-center xl:col-span-4">
                <div className="box mx-auto flex w-full flex-col gap-y-4 max-xl:max-w-3xl">
                  <div className="flex w-full items-center">
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      5
                    </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12042_8589)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12042_8589">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 sm:min-w-[278px]">
                      <span className="flex h-full w-[30%] rounded-[30px] bg-success"></span>
                    </p>
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      30
                    </p>
                  </div>
                  <div className="flex w-full items-center">
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      4
                    </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12042_8589)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12042_8589">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]">
                      <span className="flex h-full w-[40%] rounded-[30px] bg-success"></span>
                    </p>
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      40
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      3
                    </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12042_8589)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12042_8589">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]">
                      <span className="flex h-full w-[20%] rounded-[30px] bg-success"></span>
                    </p>
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      20
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      2
                    </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12042_8589)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12042_8589">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]">
                      <span className="flex h-full w-[16%] rounded-[30px] bg-success"></span>
                    </p>
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      16
                    </p>
                  </div>
                  <div className="flex items-center">
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      1
                    </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12042_8589)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12042_8589">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="ml-5 mr-3 h-2 w-full rounded-[30px] bg-gray-200 xl:min-w-[278px]">
                      <span className="flex h-full w-[8%] rounded-[30px] bg-success"></span>
                    </p>
                    <p className="mr-[2px] py-[1px] text-lg font-medium text-black">
                      8
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 min-h-[230px] w-full max-xl:mt-8 xl:col-span-8 xl:pl-8">
                <div className="grid h-full w-full grid-cols-12 rounded-3xl bg-gray-100 px-8 max-xl:mx-auto max-xl:max-w-3xl max-lg:py-8">
                  <div className="col-span-12 flex items-center md:col-span-8">
                    <div className="flex h-full w-full flex-col items-center max-lg:justify-center sm:flex-row">
                      <div className="flex flex-col items-center justify-center border-gray-200 sm:border-r sm:pr-3">
                        <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-black">
                          4.3
                        </h2>
                        <div className="mb-4 flex items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p className="text-lg font-normal leading-8 text-gray-400">
                          46 Ratings
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center border-gray-200 sm:border-l sm:pl-3">
                        <h2 className="font-manrope mb-4 text-center text-5xl font-bold text-black">
                          4.8
                        </h2>
                        <div className="mb-4 flex items-center gap-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_13624_3137)">
                              <path
                                d="M17.1033 2.71738C17.4701 1.97413 18.5299 1.97413 18.8967 2.71738L23.0574 11.1478C23.2031 11.4429 23.4846 11.6475 23.8103 11.6948L33.1139 13.0467C33.9341 13.1659 34.2616 14.1739 33.6681 14.7524L26.936 21.3146C26.7003 21.5443 26.5927 21.8753 26.6484 22.1997L28.2376 31.4656C28.3777 32.2825 27.5203 32.9055 26.7867 32.5198L18.4653 28.145C18.174 27.9919 17.826 27.9919 17.5347 28.145L9.21334 32.5198C8.47971 32.9055 7.62228 32.2825 7.76239 31.4656L9.35162 22.1997C9.40726 21.8753 9.29971 21.5443 9.06402 21.3146L2.33193 14.7524C1.73841 14.1739 2.06593 13.1659 2.88615 13.0467L12.1897 11.6948C12.5154 11.6475 12.7969 11.4429 12.9426 11.1478L17.1033 2.71738Z"
                                fill="#FBBF24"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_13624_3137">
                                <rect width="36" height="36" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                        <p className="text-lg font-normal leading-8 text-gray-400">
                          Last Month
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 max-lg:mt-8 md:col-span-4 md:pl-8">
                    <div className="flex h-full w-full flex-col items-center justify-center">
                      <button className="mb-6 w-full whitespace-nowrap rounded-full bg-success px-6 py-4 text-center text-lg font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-success hover:shadow-green-400">
                        Write A Review
                      </button>
                      <button className="w-full whitespace-nowrap rounded-full bg-white px-6 py-4 text-center text-lg font-semibold text-success shadow-sm shadow-transparent transition-all duration-500 hover:bg-green-100 hover:shadow-green-200">
                        See All Reviews
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b border-gray-200 pb-8 max-xl:mx-auto max-xl:max-w-3xl">
              <h4 className="font-manrope mb-6 text-3xl font-semibold leading-10 text-black">
                Most helpful positive review
              </h4>
              {review?.other_reviews?.map((rev: RentalReview) => (
                <React.Fragment key={rev?.id}>
                  <div className="mb-4 flex flex-col justify-between sm:flex-row sm:items-center">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_13624_2974)">
                          <path
                            d="M14.1033 2.56698C14.4701 1.82374 15.5299 1.82374 15.8967 2.56699L19.1757 9.21093C19.3214 9.50607 19.6029 9.71064 19.9287 9.75797L27.2607 10.8234C28.0809 10.9426 28.4084 11.9505 27.8149 12.5291L22.5094 17.7007C22.2737 17.9304 22.1662 18.2614 22.2218 18.5858L23.4743 25.8882C23.6144 26.7051 22.7569 27.3281 22.0233 26.9424L15.4653 23.4946C15.174 23.3415 14.826 23.3415 14.5347 23.4946L7.9767 26.9424C7.24307 27.3281 6.38563 26.7051 6.52574 25.8882L7.7782 18.5858C7.83384 18.2614 7.72629 17.9304 7.49061 17.7007L2.1851 12.5291C1.59159 11.9505 1.91909 10.9426 2.73931 10.8234L10.0713 9.75797C10.3971 9.71064 10.6786 9.50607 10.8243 9.21093L14.1033 2.56698Z"
                            fill="#FBBF24"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13624_2974">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex items-center gap-3">
                      <h6 className="text-lg font-semibold leading-8 text-black">
                        @{rev?.user?.username}
                      </h6>
                      <p className="text-base font-medium leading-7 text-gray-400">
                        {formatDate(rev?.created_at)}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-normal leading-8 text-gray-500">
                    {rev?.description}
                  </p>
                </React.Fragment>
              ))}
            </div>
            <div className="flex flex-col items-center justify-between pt-8 max-xl:mx-auto max-xl:max-w-3xl sm:flex-row">
              <p className="py-[1px] text-lg font-normal text-black">
                {review?.other_reviews?.length} reviews
              </p>
              <form>
                <div className="flex">
                  <div className="relative">
                    <div className="absolute -left-0 top-0 px-2 py-2">
                      <p className="text-lg font-normal leading-8 text-gray-500">
                        Sort by:
                      </p>
                    </div>
                    <input
                      type="text"
                      className="shadow-xs block h-11 w-60 cursor-pointer rounded-full bg-transparent py-2.5 pl-20 pr-4 text-lg font-medium leading-8 text-black placeholder-black focus:outline-gray-200"
                      placeholder="Most Relevant"
                    />
                    <div
                      id="dropdown-button"
                      data-target="dropdown"
                      className="dropdown-toggle absolute right-0 top-2 z-10 inline-flex flex-shrink-0 cursor-pointer items-center bg-transparent px-4 py-2.5 pl-2 text-center text-base font-medium text-gray-900"
                      // type="button"
                    >
                      <svg
                        className="ml-2"
                        width="12"
                        height="7"
                        viewBox="0 0 12 7"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                          stroke="#6B7280"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div
                      id="dropdown"
                      className="absolute right-0 top-9 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Most Relevant
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            last week
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            oldest
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
