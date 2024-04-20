import React from 'react';
const DownloadButton = ({ filename }: any) => {

    return <a href={filename} download="YourDownloadFileName.pdf" className="rounded-lg px-4 py-2 bg-[#151f63] text-bold text-white hover:bg-blue-600 hover:text-blue-100 duration-300"
    >Download File</a>;
};

export default DownloadButton;
