import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useQuery } from "react-query";
import Loader from "react-loader-spinner";
import { TQuery, IQueryProps, Character } from "../utils/query.t";
import { fetchData, fetchCharacters } from "../utils/queryfetch";
import { useCallback, useEffect, useState } from "react";

export default function DisplayResult(props: TQuery) {
  const { query } = props;

  const findMatch = useCallback(() => {
    fetchData(query).then((res) => setEpisodeData(res));
  }, [query]);

  const [characterData, setCharacterData] = useState<Character>();

  useEffect(() => {
    fetchCharacters().then((res) => setCharacterData(res.results));
  }, []);

  const [episodedata, setEpisodeData] = useState<IQueryProps>();

  const { isLoading } = useQuery("queryMatch", findMatch);

  if (isLoading) {
    return (
      <div className="d-flex-center">
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
  console.log(characterData);
  return (
    <>
      {episodedata?.name && (
        <div className="d-flex justify-content-around">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title className="text-primary">
                {episodedata.name}
              </Card.Title>
              <Card.Text>
                <span className="text-dark">
                  {`Season : ${query.season} Episode : ${query.episode}`}{" "}
                </span>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem className="text-secondary">
                Air Date : {"    "}
                <span className="text-info">{episodedata.air_date}</span>
              </ListGroupItem>
              <ListGroupItem className="text-secondary">
                characters :{" "}
                <span className="text-info">
                  {episodedata.characters.length}
                </span>
              </ListGroupItem>
            </ListGroup>
            <Card.Body>
              <h5 className="text-center mb-4">Select a character to view</h5>
              <ul>
                {characterData?.map((character, inx) => {
                  console.log(inx);
                  return (
                    <>
                      <li key={`${inx}- ${character.name}`}>
                        <a target="_blank" href={character.image}>
                          {character?.name}
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
}
