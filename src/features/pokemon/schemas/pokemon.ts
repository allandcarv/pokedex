import { z } from 'zod';

const nameAndUrl = z.object({ name: z.string(), url: z.string() });

export const pokemonsResponse = z
  .object({
    count: z.number(),
    next: z.string(),
    previous: z.union([z.string(), z.null()]),
    results: z.array(nameAndUrl),
  })
  .strict();

const pokemonType = z.object({ slot: z.number(), type: nameAndUrl });
const pokemonAbility = z.object({
  is_hidden: z.boolean(),
  slot: z.number(),
  ability: z.union([nameAndUrl, z.null()]),
});
const pokemonForm = nameAndUrl;
const pokemonGameIndices = z.object({ game_index: z.number(), version: nameAndUrl });
const pokemonVersionGroupDetails = z.object({
  level_learned_at: z.number(),
  move_learn_method: nameAndUrl,
  order: z.null(),
  version_group: nameAndUrl,
});
const pokemonMove = z.object({
  move: nameAndUrl,
  version_group_details: z.array(pokemonVersionGroupDetails),
});
const pokemonVersion1 = z.object({
  back_default: z.string(),
  back_gray: z.string(),
  back_transparent: z.string(),
  front_default: z.string(),
  front_gray: z.string(),
  front_transparent: z.string(),
});
const pokemonVersion2 = z.object({
  back_default: z.string(),
  back_shiny: z.string(),
  front_default: z.string(),
  front_shiny: z.string(),
  front_transparent: z.string(),
});
const pokemonVersion3 = z.object({
  back_default: z.string(),
  back_shiny: z.string(),
  front_default: z.string(),
  front_shiny: z.string(),
});
const pokemonVersion4 = z.object({
  back_default: z.string(),
  back_female: z.union([z.string(), z.null()]),
  back_shiny: z.string(),
  back_shiny_female: z.union([z.string(), z.null()]),
  front_default: z.string(),
  front_female: z.union([z.string(), z.null()]),
  front_shiny: z.string(),
  front_shiny_female: z.union([z.string(), z.null()]),
});
const pokemonVersion5 = pokemonVersion4.extend({ animated: pokemonVersion4 });
const pokemonVersion6 = z.object({
  front_default: z.string(),
  front_female: z.union([z.string(), z.null()]),
  front_shiny: z.string(),
  front_shiny_female: z.union([z.string(), z.null()]),
});
const pokemonVersion7 = pokemonVersion6;
const pokemonVersion8 = pokemonVersion7.omit({ front_shiny: true, front_shiny_female: true });
const pokemonStat = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: nameAndUrl,
});
const pokemonHeldItem = z.object({
  item: nameAndUrl,
  version_details: z.array(z.object({ rarity: z.number(), version: nameAndUrl })),
});

export const pokemonResponse = z
  .object({
    abilities: z.array(pokemonAbility),
    base_experience: z.number(),
    cries: z.object({ latest: z.string(), legacy: z.string() }),
    forms: z.array(pokemonForm),
    game_indices: z.array(pokemonGameIndices),
    height: z.number(),
    held_items: z.array(pokemonHeldItem),
    id: z.string(),
    is_default: z.boolean(),
    location_area_encounters: z.string(),
    moves: z.array(pokemonMove),
    name: z.string(),
    order: z.number(),
    past_abilities: z.array(pokemonAbility),
    past_types: z.array(z.undefined()),
    species: nameAndUrl,
    sprites: z.object({
      back_default: z.string(),
      back_female: z.union([z.string(), z.null()]),
      back_shiny: z.string(),
      back_shiny_female: z.union([z.string(), z.null()]),
      front_default: z.string(),
      front_female: z.union([z.string(), z.null()]),
      front_shiny: z.string(),
      front_shiny_female: z.union([z.string(), z.null()]),
      other: z.object({
        dream_world: z.object({
          front_default: z.string(),
          front_female: z.union([z.string(), z.null()]),
        }),
        home: z.object({
          front_default: z.string(),
          front_female: z.union([z.string(), z.null()]),
          front_shiny: z.string(),
          front_shiny_female: z.union([z.string(), z.null()]),
        }),
        'official-artwork': z.object({
          front_default: z.string(),
          front_shiny: z.string(),
        }),
        showdown: z.object({
          back_default: z.string(),
          back_female: z.union([z.string(), z.null()]),
          back_shiny: z.string(),
          back_shiny_female: z.union([z.string(), z.null()]),
          front_default: z.string(),
          front_female: z.union([z.string(), z.null()]),
          front_shiny: z.string(),
          front_shiny_female: z.union([z.string(), z.null()]),
        }),
      }),
      versions: z.object({
        'generation-i': z.object({
          'red-blue': pokemonVersion1,
          yellow: pokemonVersion1,
        }),
        'generation-ii': z.object({
          crystal: pokemonVersion2.extend({
            back_shiny_transparent: z.string(),
            back_transparent: z.string(),
            front_shiny_transparent: z.string(),
          }),
          gold: pokemonVersion2,
          silver: pokemonVersion2,
        }),
        'generation-iii': z.object({
          emerald: pokemonVersion3.omit({ back_default: true, back_shiny: true }),
          'firered-leafgreen': pokemonVersion3,
          'ruby-sapphire': pokemonVersion3,
        }),
        'generation-iv': {
          'diamond-perl': pokemonVersion4,
          'heartgold-soulsilver': pokemonVersion4,
          platinum: pokemonVersion4,
        },
        'generation-v': z.object({
          'black-white': pokemonVersion5,
        }),
        'generation-vi': z.object({
          'omegaruby-alphasapphire': pokemonVersion6,
          'x-y': pokemonVersion6,
        }),
        'generation-vii': z.object({
          icons: pokemonVersion7.omit({ front_shiny: true, front_shiny_female: true }),
          'ultra-sun-ultra-moon': pokemonVersion7,
        }),
        'generation-viii': z.object({
          icons: pokemonVersion8,
        }),
      }),
    }),
    stats: z.array(pokemonStat),
    types: z.array(pokemonType),
    weight: z.number(),
  })
  .strict();
