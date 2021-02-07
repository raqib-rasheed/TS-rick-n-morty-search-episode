import React, { Dispatch, SetStateAction } from "react";
import { Button, Form } from "react-bootstrap";

type TSearchbar = {
  setQuery: Dispatch<SetStateAction<{ season: number; episode: number }>>;
  setshowResult: Dispatch<React.SetStateAction<boolean>>;
  query: {
    season: number;
    episode: number;
  };
};

export default function UserQuery({
  setQuery,
  setshowResult,
  query,
}: TSearchbar) {
  function handleSelect(value: string, name: string) {
    setshowResult(false);
    const changes = { [name]: parseInt(value) };
    setQuery(Object.assign(query, changes));
    name === "search" && setshowResult(true);
  }
  return (
    <div className="container mt-5 bg-light p-3 border border-2">
      <Form>
        <Form.Group controlId="exampleForm.SelectCustomSizeSm">
          <Form.Label>Select season</Form.Label>
          <Form.Control
            name="season"
            onChange={(e) => handleSelect(e.target.value, e.target.name)}
            as="select"
            size="sm"
            custom
          >
            <option value={1}>Season 1</option>
            <option value={2}>Season 2</option>
          </Form.Control>
        </Form.Group>
        <Form.Group
          className="d-flex d-flex-column align-items-center"
          controlId="exampleForm.SelectCustomSizeSm"
        >
          <Form.Label>Select episode</Form.Label>
          <input
            min={1}
            max={9}
            type="number"
            name="episode"
            defaultValue={1}
            className="py-1 text-center"
            onChange={(e) => handleSelect(e.target.value, e.target.name)}
          ></input>
          <Button
            className="mx-2 px-3"
            name="search"
            onClick={() => handleSelect("", "search")}
            variant="outline-secondary"
          >
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}
