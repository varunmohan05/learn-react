import { useState } from "react";
import { ItemListProps } from "../../types/arrObj";

let nextId = 3;
type artist = {
  id: number;
  title: string;
  seen: boolean;
};
const initialList: artist[] = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  // created a new function to reduce code duplicacy
  function createUpdatedCopyOfList(
    artistList: artist[],
    artworkId: number,
    nextSeen: boolean
  ): artist[] {
    const tmpList = artistList.map((e) => {
      const nextArtist = { ...e };
      if (e.id === artworkId) {
        nextArtist.seen = nextSeen;
      }
      return nextArtist;
    });
    return tmpList;
  }

  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    const tmpList: artist[] = createUpdatedCopyOfList(
      myList,
      artworkId,
      nextSeen
    );
    setMyList(tmpList);
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    const tmpList: artist[] = createUpdatedCopyOfList(
      yourList,
      artworkId,
      nextSeen
    );
    setYourList(tmpList);
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
