import { SetStateAction } from 'react';
import { Image, Upload } from 'antd';
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadFile, UploadProps } from 'antd';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

export const FileUploadComponent = ({
  fileList,
  setFileList,
}: {
  fileList: UploadFile[];
  setFileList: React.Dispatch<SetStateAction<UploadFile<string>[]>>;
}) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    // const filesToUpload = newFileList
    //   .filter((file) => !file.url)
    //   .map((file) => file.originFileObj as File);
    // const validData = createUploadsInputSchema.parse({
    //   document: filesToUpload,
    // });

    // if (filesToUpload.length > 0) {
    //   uploadFile.mutate(
    //     { data: validData },
    //     {
    //       onSuccess(response) {
    //         addNotification({
    //           type: 'success',
    //           title: 'Success',
    //           message: 'File uploaded successfully',
    //         });
    //         const uploadedFileURL = response?.data?.url;
    //         const newUploadedImages = [...uploadedImages, uploadedFileURL];

    //         setUploadedImages(newUploadedImages);
    //         localStorage.setItem(
    //           'uploadedImages',
    //           JSON.stringify(newUploadedImages),
    //         );
    //       },
    //       onError(error) {
    //         const formatError = formatErrors(error);
    //         addNotification({
    //           type: 'error',
    //           title: 'Validation Error',
    //           message: formatError,
    //         });
    //       },
    //     },
    //   );
    // }
  };

  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <>
      <Upload
        //  action={uploadedImages}
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={(val) => handleChange(val)}
        multiple
        accept="image/*"
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

// import React, { useState } from 'react';
// import { PlusOutlined } from '@ant-design/icons';
// import { Image, Upload } from 'antd';
// import type { GetProp, UploadFile, UploadProps } from 'antd';

// type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

// const getBase64 = (file: FileType): Promise<string> =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });

// export const App: React.FC = () => {
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState('');
//   const [fileList, setFileList] = useState<UploadFile[]>([
//     {
//       uid: '-1',
//       name: 'image.png',
//       status: 'done',
//       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
//     {
//       uid: '-2',
//       name: 'image.png',
//       status: 'done',
//       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
//     {
//       uid: '-3',
//       name: 'image.png',
//       status: 'done',
//       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
//     {
//       uid: '-4',
//       name: 'image.png',
//       status: 'done',
//       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
//     {
//       uid: '-xxx',
//       percent: 50,
//       name: 'image.png',
//       status: 'uploading',
//       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
//     {
//       uid: '-5',
//       name: 'image.png',
//       status: 'error',
//     },
//   ]);

//   const handlePreview = async (file: UploadFile) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj as FileType);
//     }

//     setPreviewImage(file.url || (file.preview as string));
//     setPreviewOpen(true);
//   };

//   const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
//     setFileList(newFileList);

//   const uploadButton = (
//     <button style={{ border: 0, background: 'none' }} type="button">
//       <PlusOutlined />
//       <div style={{ marginTop: 8 }}>Upload</div>
//     </button>
//   );
//   return (
//     <>
//       <Upload
//         action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
//         listType="picture-card"
//         fileList={fileList}
//         onPreview={handlePreview}
//         onChange={handleChange}
//       >
//         {fileList.length >= 8 ? null : uploadButton}
//       </Upload>
//       {previewImage && (
//         <Image
//           wrapperStyle={{ display: 'none' }}
//           preview={{
//             visible: previewOpen,
//             onVisibleChange: (visible) => setPreviewOpen(visible),
//             afterOpenChange: (visible) => !visible && setPreviewImage(''),
//           }}
//           src={previewImage}
//         />
//       )}
//     </>
//   );
// };
