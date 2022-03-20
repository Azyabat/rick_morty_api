import React from 'react';
import { ECharacterStatus, TCharacterType } from '../../mobx/CharactersStore';
import CustomField from '../CustomField/CustomField';

interface ICharacterCardProps extends TCharacterType {}

function getCharacterStatus(status: ECharacterStatus) {
  let color;

  switch (status) {
    case ECharacterStatus.ALIVE:
      color = 'green';
      break;

    case ECharacterStatus.DEAD:
      color = 'red';
      break;

    default:
      color = 'gray';
      break;
  }

  return <div className="status-indicator" style={{ backgroundColor: color }} title={status} />;
}

function CharacterCard(props: ICharacterCardProps) {
  const { name, image, status, gender, species, location, origin, episode } = props;

  return (
    <div className="character-card">
      <img src={image} alt="" />
      <h3>{name}</h3>
      <div className="content">
        <CustomField label="Status" value={getCharacterStatus(status)} isJSXValue />
        <CustomField label="Species" value={species} />
        <CustomField label="Gender" value={gender} />
        <CustomField label="Location" value={location?.name} />
        <CustomField label="Origin" value={origin?.name} />
        <CustomField label="Number of episodes" value={episode.length.toString()} />
      </div>
    </div>
  );
}

export default CharacterCard;
