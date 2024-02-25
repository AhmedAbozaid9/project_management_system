import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

import Select from "./Select";

const MyModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const uploadImage = () => {
    console.log("nyaaaaaaaaa");
  };

  return (
    <>
      <Button
        onPress={onOpen}
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
                <div className="flex max-md:flex-col justify-between gap-5">
                  <div className="flex flex-1 flex-col gap-5">
                    <Input
                      autoFocus
                      label="Project name"
                      placeholder="Enter the project name"
                      variant="bordered"
                    />
                    <Select />
                    <Input
                      autoFocus
                      label="Deployed link"
                      placeholder="Enter the link to the project itself"
                      variant="bordered"
                    />
                    <Input
                      autoFocus
                      label="Github link"
                      placeholder="Enter the link to the repo containing the code"
                      variant="bordered"
                    />
                    <Button
                      onPress={uploadImage}
                      className="font-medium"
                      radius="sm"
                      variant="bordered"
                    >
                      Upload image
                    </Button>
                  </div>
                  <div className="w-full max-w-96 h-72 bg-gray-500"></div>
                </div>
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
