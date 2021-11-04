import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifsArray: Gif[];
}

const ResultsList = ({ gifsArray }: Props) => {
  return (
    <ul className="ResultList">
      <h2>Results</h2>
      <div className="ResultArray">
        {gifsArray.map((gif) => (
          <Result key={gif.id} gif={gif} />
        ))}
      </div>
    </ul>
  );
};

export default ResultsList;
