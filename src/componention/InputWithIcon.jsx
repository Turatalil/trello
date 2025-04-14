import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const InputWithIcon = () => {
  const users = useSelector((state) => state.basket?.users || []);
  const [search, setSearch] = useState("");

  const filterByName = users.filter((user) =>
    user.name?.toLowerCase().startsWith(search.toLowerCase())
  );

  const showModal = search.trim().length > 0;

  return (
    <Wrapper>
      <Label>
        <StyledInput
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="Поиск"
          autoComplete="off"
        />
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeWidth="1.25"
              d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Icon>
      </Label>

      {showModal && (
        <Modal>
          {filterByName.length > 0 ? (
            filterByName.map((user) => (
              <ModalItem key={user.id}>{user.name}</ModalItem>
            ))
          ) : (
            <ModalItem>Андай тема жок!</ModalItem>
          )}
        </Modal>
      )}
    </Wrapper>
  );
};

export default InputWithIcon;

const Wrapper = styled.div`
  position: relative;
  width: 250px;
`;

const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  border-radius: 6px;
  border: 2px solid #373737;
  padding: 15px 8px 15px 10px;
  background-color: transparent;
`;

const StyledInput = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: #c5c5c5;
  font-size: 16px;
  width: 100%;
`;

const Icon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #c5c5c5;
  display: flex;
  align-items: center;
`;

const Modal = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background-color: white;
  border: 2px solid #373737;
  border-radius: 6px;
  z-index: 10;
  max-height: 200px;
  overflow-y: auto;
`;

const ModalItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  color: black;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
`;
