import React, { useState, useRef } from "react";
import { Input } from "@nextui-org/react";
import Image from "next/image";
import axios from "axios";

import MultiSelect from "./MultiSelect";
import Select from "./Select";

const NewProjectForm = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState(new Set([]));
  const [type, setType] = useState("");
  const [github, setGithub] = useState("");
  const [website, setWebsite] = useState("");

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/projects/new", {
        title,
        date: new Date(),
        tech: [...tech],
        type: type.currentKey,
        github,
        website,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      id="add-project"
      onSubmit={(e) => handleFormSubmit(e)}
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
          value={type}
          setValue={setType}
        />
        <Input
          label="Deployed link"
          placeholder="Enter the link to the project itself"
          variant="bordered"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <Input
          label="Github link"
          placeholder="Enter the link to the repo containing the code"
          variant="bordered"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
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
  );
};

export default NewProjectForm;
