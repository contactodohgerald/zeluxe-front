// import { RadioGroup } from '@headlessui/react';
import { Slider, Switch } from 'antd';
import { useState } from 'react';
import { useSettings } from '../api/get-settings';
import { Spinner } from '@/components/ui/spinner';
import { Input } from '@/components/ui/form';
import { EditIcon } from '@/components/ui/svgs';

export const SettingsList = () => {
  const settingQuery = useSettings();
  const settings = settingQuery?.data?.data;
  const [enabled, setEnabled] = useState(false);
  const [val, setVal] = useState(30);

  if (settingQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <>
      <div className="w-112 bg-default-background flex h-full flex-col items-start gap-4">
        <div className="border-neutral-border flex w-full items-center gap-4 border-b border-solid py-6 pl-6 pr-4">
          <span className="text-default-font shrink-0 grow basis-0 font-raleway text-3xl">
            Display preferences
          </span>
          {/* <IconButton 
            icon="FeatherX"
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          /> */}
        </div>
        <div className="flex w-full shrink-0 grow basis-0 flex-col items-start gap-6 px-6 py-6">
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full flex-col items-start gap-2">
              <span className="mb-4 w-full font-raleway text-xl">
                Manage Site Content
              </span>
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="mb-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="relative w-full">
                  <Input
                    label="App Name"
                    value={settings?.app_name}
                    className="bg-light"
                  />
                  <button
                    type="submit"
                    className="absolute end-0 top-[25px] h-[57%] rounded-e-sm border bg-white px-2.5 text-sm font-medium text-white hover:bg-grey-5 focus:outline-none focus:ring-4"
                  >
                    <EditIcon className="rounded-e-2xl" />
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="relative w-full">
                  <Input
                    label="Site Email"
                    value={settings?.site_email}
                    className="bg-light"
                  />
                  <button
                    type="submit"
                    className="absolute end-0 top-[25px] h-[57%] rounded-e-sm border bg-white px-2.5 text-sm font-medium text-white hover:bg-grey-5 focus:outline-none focus:ring-4"
                  >
                    <EditIcon className="rounded-e-2xl" />
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="relative w-full">
                  <Input
                    label="Address"
                    value={settings?.address}
                    className="bg-light"
                  />
                  <button
                    type="submit"
                    className="absolute end-0 top-[25px] h-[57%] rounded-e-sm border bg-white px-2.5 text-sm font-medium text-white hover:bg-grey-5 focus:outline-none focus:ring-4"
                  >
                    <EditIcon className="rounded-e-2xl" />
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="relative w-full">
                  <Input
                    label="Site Phone"
                    value={settings?.site_phone}
                    className="bg-light"
                  />
                  <button
                    type="submit"
                    className="absolute end-0 top-[25px] h-[57%] rounded-e-sm border bg-white px-2.5 text-sm font-medium text-white hover:bg-grey-5 focus:outline-none focus:ring-4"
                  >
                    <EditIcon className="rounded-e-2xl" />
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="relative w-full">
                  <Input
                    label="App Icon"
                    value={settings?.app_icon}
                    className="bg-light"
                  />
                  <button
                    type="submit"
                    className="absolute end-0 top-[25px] h-[57%] rounded-e-sm border bg-white px-2.5 text-sm font-medium text-white hover:bg-grey-5 focus:outline-none focus:ring-4"
                  >
                    <EditIcon className="rounded-e-2xl" />
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="relative w-full">
                  <Input
                    label="App Logo"
                    value={settings?.app_logo}
                    className="bg-light"
                  />
                  <button
                    type="submit"
                    className="absolute end-0 top-[25px] h-[57%] rounded-e-sm border bg-white px-2.5 text-sm font-medium text-white hover:bg-grey-5 focus:outline-none focus:ring-4"
                  >
                    <EditIcon className="rounded-e-2xl" />
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="relative w-full">
                  <Input
                    label="Support Email"
                    value={settings?.support_email}
                    className="bg-light"
                  />
                  <button
                    type="submit"
                    className="absolute end-0 top-[25px] h-[57%] rounded-e-sm border bg-white px-2.5 text-sm font-medium text-white hover:bg-grey-5 focus:outline-none focus:ring-4"
                  >
                    <EditIcon className="rounded-e-2xl" />
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="relative w-full">
                  <Input
                    label="Site Favicon"
                    value={settings?.site_favicon}
                    className="bg-light"
                  />
                  <button
                    type="submit"
                    className="absolute end-0 top-[25px] h-[57%] rounded-e-sm border bg-white px-2.5 text-sm font-medium text-white hover:bg-grey-5 focus:outline-none focus:ring-4"
                  >
                    <EditIcon className="rounded-e-2xl" />
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
                <div className="relative w-full">
                  <Input
                    label="Site Name"
                    value={settings?.site_name}
                    className="bg-light"
                  />
                  <button
                    type="submit"
                    className="absolute end-0 top-[25px] h-[57%] rounded-e-sm border bg-white px-2.5 text-sm font-medium text-white hover:bg-grey-5 focus:outline-none focus:ring-4"
                  >
                    <EditIcon className="rounded-e-2xl" />
                    <span className="sr-only">Edit</span>
                  </button>
                </div>
              </div>
              <div className="flex w-full items-center gap-4 px-3 py-3">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className="data-[checked]:bg-primary"
                />
                <span className="text-default-font line-clamp-1 shrink-0 grow basis-0 font-raleway">
                  Show page header
                </span>
              </div>
              <div className="flex w-full items-center gap-4 px-3 py-3">
                <Switch checked={enabled} onChange={setEnabled} />
                <span className="text-default-font line-clamp-1 shrink-0 grow basis-0 font-raleway">
                  Show description
                </span>
              </div>
              <div className="flex w-full items-center gap-4 px-3 py-3">
                <Switch checked={enabled} onChange={setEnabled} />
                <span className="text-default-font line-clamp-1 shrink-0 grow basis-0 font-raleway">
                  Include actions
                </span>
              </div>
            </div>
          </div>
          <div className="bg-neutral-border flex h-px w-full flex-none flex-col items-center gap-2" />
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full flex-col items-start gap-2">
              <span className="text-default-font w-full text-xl">Logo</span>
            </div>
            <div className="flex w-full items-center gap-4 px-3 py-3">
              <Switch checked={enabled} onChange={setEnabled} />
              <span className="text-default-font line-clamp-1 shrink-0 grow basis-0 font-raleway">
                Show logo
              </span>
            </div>
            <div className="flex w-full flex-col items-start gap-4 px-3 py-3">
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="dropzone-file"
                  className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                >
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input id="dropzone-file" type="file" className="hidden" />
                </label>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-6 px-3 py-3">
              <div className="flex w-full flex-col items-start gap-1">
                <span className="text-default-font w-full font-raleway font-bold">
                  Logo size
                </span>
                <span className="text-caption text-subtext-color font-raleway">
                  Use the slider to choose your logo size.
                </span>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <Slider
                  className="w-10/12"
                  styles={{}}
                  min={0}
                  max={100}
                  step={1}
                  defaultValue={val}
                  onChange={(value) => setVal(value)}
                />
                <div className="flex w-full items-center justify-between">
                  <span className="text-caption text-subtext-color font-raleway">
                    Small
                  </span>
                  <span className="text-caption text-subtext-color font-raleway">
                    Large
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-border flex h-px w-full flex-none flex-col items-center gap-2" />
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex w-full flex-col items-start gap-2">
              <span className="w-full font-raleway text-xl">Background</span>
            </div>
            <div className="flex w-full flex-col gap-2 px-3 py-3">
              <div className="mb-4 flex items-center">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-primary"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 font-raleway text-sm font-medium"
                >
                  Auto-generate a background
                </label>
              </div>
              <div className="flex items-center">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-primary"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 font-raleway text-sm font-medium"
                >
                  Use an image as the background
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
