import { FaBolt } from '@react-icons/all-files/fa/FaBolt';
import { FaDragon } from '@react-icons/all-files/fa/FaDragon';
import { FaFire } from '@react-icons/all-files/fa/FaFire';
import { FaFistRaised } from '@react-icons/all-files/fa/FaFistRaised';
import { FaGhost } from '@react-icons/all-files/fa/FaGhost';
import { FaLeaf } from '@react-icons/all-files/fa/FaLeaf';
import { FaSnowflake } from '@react-icons/all-files/fa/FaSnowflake';
import { FaWater } from '@react-icons/all-files/fa/FaWater';
import { GiMagicSwirl } from '@react-icons/all-files/gi/GiMagicSwirl';
import { GiPlainCircle } from '@react-icons/all-files/gi/GiPlainCircle';
import { GiPoisonBottle } from '@react-icons/all-files/gi/GiPoisonBottle';
import { GiPsychicWaves } from '@react-icons/all-files/gi/GiPsychicWaves';
import { GiRockGolem } from '@react-icons/all-files/gi/GiRockGolem';
import { GiShadowFollower } from '@react-icons/all-files/gi/GiShadowFollower';
import { GiShield } from '@react-icons/all-files/gi/GiShield';
import { GiStoneBlock } from '@react-icons/all-files/gi/GiStoneBlock';
import { GiSpottedBug } from '@react-icons/all-files/gi/GiSpottedBug';
import { GiWindHole } from '@react-icons/all-files/gi/GiWindHole';


const pokemonTypeConfig = {
    water: { icon: FaWater, color: '#6390F0' },
    fire: { icon: FaFire, color: '#EE8130' },
    grass: { icon: FaLeaf, color: '#7AC74C' },
    electric: { icon: FaBolt, color: '#F7D02C' },
    normal: { icon: GiPlainCircle, color: '#A8A77A' },
    flying: { icon: GiWindHole, color: '#A98FF3' },
    bug: { icon: GiSpottedBug, color: '#A6B91A' },
    poison: { icon: GiPoisonBottle, color: '#A33EA1' },
    rock: { icon: GiRockGolem, color: '#B6A136' },
    ground: { icon: GiStoneBlock, color: '#E2BF65' },
    fighting: { icon: FaFistRaised, color: '#C22E28' },
    psychic: { icon: GiPsychicWaves, color: '#F95587' },
    ice: { icon: FaSnowflake, color: '#96D9D6' },
    ghost: { icon: FaGhost, color: '#705746' },
    steel: { icon: GiShield, color: '#B7B7CE' },
    dragon: { icon: FaDragon, color: '#6F35FC' },
    dark: { icon: GiShadowFollower, color: '#705746' },
    fairy: { icon: GiMagicSwirl, color: '#D685AD' }
};


export const PokemonTypeIcon = ({ type }) => {
    const types = Array.isArray(type) ? type : [type];

    return (
        <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '8px' }}>
            {types.filter(Boolean).map((typeName) => {
                const typeKey = typeName.toLowerCase();
                const config = pokemonTypeConfig[typeKey] || { icon: GiPlainCircle, color: '#777' };
                const IconComponent = config.icon;

                return (
                    <span
                        key={typeName}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 12px',
                            borderRadius: '20px',
                            color: '#fff',
                            backgroundColor: config.color,
                            fontFamily: 'sans-serif',
                            fontWeight: 'bold',
                            textTransform: 'capitalize',
                            width: '5rem',
                            fontSize: '13px'
                        }}
                    >
                        <IconComponent size={20} />
                        <span>{typeName}</span>
                    </span>
                );
            })}
        </div>
    );
};
