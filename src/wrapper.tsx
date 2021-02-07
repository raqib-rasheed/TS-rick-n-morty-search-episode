import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import UserQuery from "./components/userQuery";
import DisplayResult from "./components/displayresult";

const queryClient = new QueryClient();

export default function Wrapper() {
  const [query, setQuery] = useState({ season: 1, episode: 1 });
  const [showResult, setshowResult] = useState(false);
  return (
    <div className="wrapper">
      <QueryClientProvider client={queryClient}>
        <UserQuery
          query={query}
          setQuery={setQuery}
          setshowResult={setshowResult}
        />
        {showResult && <DisplayResult query={query} />}
      </QueryClientProvider>
    </div>
  );
}
