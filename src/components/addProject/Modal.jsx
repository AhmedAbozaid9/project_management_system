import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import NewProjectForm from "./NewProjectForm";

const MyModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <>
        <Button
          onClick={onOpen}
          className="bg-primary-purple sm:my-1 my-2 font-medium sm:hidden"
          radius="sm"
          size="sm"
        >
          Add New
        </Button>
        <Button
          onClick={onOpen}
          className="bg-primary-purple sm:my-1 my-2 font-medium max-sm:hidden"
          radius="sm"
          size="md"
        >
          Add New
        </Button>
      </>
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
                <NewProjectForm
                  closeModal={onClose}
                  setIsSubmitting={setIsSubmitting}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-primary-purple font-medium"
                  radius="sm"
                  type="submit"
                  form="add-project"
                  isLoading={isSubmitting}
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
