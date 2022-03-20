import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import CharactersStore, { TCharacterType } from '../../mobx/CharactersStore';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const AppLayout = observer(() => {
  const getCharacterCards = (data: TCharacterType[]) => {
    return data.map((character) => <CharacterCard key={character.id} {...character} />);
  };

  const handleNextPage = useCallback(() => {
    if (CharactersStore.data) {
      CharactersStore.loadData(CharactersStore.data.info.next);
    }
  }, []);

  const handlePrevPage = useCallback(() => {
    if (CharactersStore.data) {
      CharactersStore.loadData(CharactersStore.data.info.prev);
    }
  }, []);

  return (
    <div>
      <h2>Rick and Morty API</h2>
      <div className="App_controller_content">
        {CharactersStore.data?.info.prev !== null && (
          <span className="content_controller" onClick={handlePrevPage}>{`<<`}</span>
        )}
        <span>pages</span>
        {CharactersStore.data?.info.next !== null && (
          <span className="content_controller" onClick={handleNextPage}>{`>>`}</span>
        )}
      </div>
      <div className="App_content_wrapper">
        {CharactersStore.isLoadingData && <p>Loading...</p>}
        {CharactersStore.data && <div className="App_content">{getCharacterCards(CharactersStore.data?.results)}</div>}
      </div>
    </div>
  );
});

export default AppLayout;
