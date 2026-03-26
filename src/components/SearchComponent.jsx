import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function SearchComponent({ processSearch }) {
  return (
    <>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <TextInput
            id="search"
            type="text"
            icon={IoIosSearch}
            placeholder="search your games"
            required
            onKeyUp={(event) => processSearch(event)}
          />
        </div>
      </form>
    </>
  );
}
