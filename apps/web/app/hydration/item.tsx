 "use client";

import { User } from "../../types";
import { useQuery } from "@tanstack/react-query";
 
import {useState} from "react";
import {AutocompleteStyled} from "ui/AutocompleteStyled";
import {ButtonMui} from 'ui/ButtonMui' 

// import {ButtonStyle} from 'ui/Button'

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  
  return users;
}

export default function ListUsers() {
  const [count, setCount] = useState(0);
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["hydrate-users"],
    queryFn: () => getUsers(),
  });
  const onClick = (label : string) => {
    const num = label === 'increment' ? 1 : -1
    setCount((prev)=> prev + num)
  }

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
       <AutocompleteStyled>auoto</AutocompleteStyled>
      <div style={{ marginBottom: "4rem", textAlign: "center" }}>
        <h4 style={{ marginBottom: 16 }}>{count}</h4>
        {/* <ButtonStyle size="small"  color="green" backgroundColor="pink" onClick={() => onClick('increment')}> increment</ButtonStyle> */}
        {/* <ButtonStyle size="large"  color="red" primary onClick={() => onClick('decrement')}> decrement</ButtonStyle> */}
      
       <ButtonMui>asdasd</ButtonMui>
        <button
          onClick={() => setCount((prev) => prev - 1)}
          style={{ marginInline: 16 }}
        >
          decrement
        </button>
        <button onClick={() => setCount(0)}>reset</button>
      </div>

      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.name}
                style={{ height: 180, width: 180 }}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
