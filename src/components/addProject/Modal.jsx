import React, { useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import axios from "axios";

import MultiSelect from "./MultiSelect";
import Select from "./Select";

const MyModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [title, setTitle] = useState("");
  const [tech, setTech] = React.useState(new Set([]));

  const [image, setImage] = useState("");
  const imageRef = useRef(null);

  const handleImageChange = () => {
    const file = imageRef.current.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async () => {
    const { data } = axios.post("/api/projects/add", {
      title,
      date: new Date(),
      tech,
    });
  };

  const uploadImage = () => {
    console.log("nyaaaaaaaaa");
  };

  return (
    <>
      <Button
        onClick={onOpen}
        className="bg-primary-purple my-1 font-medium"
        radius="sm"
      >
        Add New
      </Button>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        scrollBehavior="inside"
        classNames={{ wrapper: "mx-auto w-full" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new project
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleFormSubmit}
                  className="flex max-md:flex-col justify-between gap-5"
                >
                  <div className="flex flex-1 flex-col gap-5">
                    <Input
                      label="Project name"
                      placeholder="Enter the project name"
                      variant="bordered"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <MultiSelect
                      label="Project tech"
                      placeholder="select the technologies"
                      values={tech}
                      setValues={setTech}
                    />
                    <Select
                      label="Project type"
                      placeholder="select the project type"
                      values={tech}
                      setValues={setTech}
                    />
                    <Input
                      label="Deployed link"
                      placeholder="Enter the link to the project itself"
                      variant="bordered"
                    />
                    <Input
                      label="Github link"
                      placeholder="Enter the link to the repo containing the code"
                      variant="bordered"
                    />
                    <input
                      ref={imageRef}
                      type="file"
                      accept="image/x-png,image/gif,image/jpeg"
                      className="file-input"
                      onChange={handleImageChange}
                    />
                  </div>
                  {image ? (
                    <div className="relative w-full max-w-96 h-72 ">
                      <Image
                        alt="project thumbnail"
                        fill
                        src={image}
                        className="object-cover object-center"
                      />
                    </div>
                  ) : (
                    <div className="w-full max-w-96 h-72 bg-gray-500"></div>
                  )}
                </form>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="bg-primary-purple font-medium"
                  radius="sm"
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
