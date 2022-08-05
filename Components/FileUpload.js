import React, { useState, createRef } from "react";
import Modal from "react-modal";
import axios from "axios";

const FileUpload = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [file, setFile] = useState();

  console.log(file);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
      height: "580px",
    },
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  const data = {
    hello: "ncfkn",
  };
  const sendFileToIPFS = async (e) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      var config = {
        method: "post",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJmMTdjODcyNS03OTAxLTQ5NTUtOGRkZi1hNzJlMzM5NzA3NzIiLCJlbWFpbCI6Imt1bWFybml0aXNoNzg3MDM4QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI0MTE5ZGQ0ODNhZGIwYjI5MjQwNSIsInNjb3BlZEtleVNlY3JldCI6ImM3OGI4Y2Q4NmNiNTljZDQxMjFlMTdkMmU4MjVkY2FlNThlZDkyMmEzYzkzMDEyMTFkYjc5YjY0ZDQzZTFmNGUiLCJpYXQiOjE2NTg2OTcyNDN9.E0uFksg-A8W90gGFc3TjJnP7wJDEic-QkrEShDTlvkY",
        },
        data: file,
      };
      const res = await axios(config);
      console.log(res.data.IpfsHash);
      // NftUri = res.data.IpfsHash;
      console.log(res.data);
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  };
  return (
    <>
      <button
        className="bg-red-800  text-white py-2 px-2 rounded w-40 text-center font-semibold"
        onClick={openModal}
      >
        FileUpload
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>❌</button>
        <div>Drop Your Document</div>

        <div className=" pt-16 justify-center place-self-center">
          <input type="file" onChange={handleChange} />
          <button
            class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded justify-center"
            onClick={sendFileToIPFS}
          >
            upload
          </button>
        </div>
      </Modal>
    </>
  );
};

export default FileUpload;
