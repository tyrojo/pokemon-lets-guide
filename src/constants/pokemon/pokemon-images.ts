import { IPokemon, IPokemonWithBaseCP } from '../../app/modules/pokedex/pokedex.models';
import { isDev } from '../../common/utils/platforms';

const pokemonImages: { [key: string]: string } = {
  '001': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    : '/src/assets/images/pokemon-images/001.png',
  '002': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'
    : '/src/assets/images/pokemon-images/002.png',
  '003': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
    : '/src/assets/images/pokemon-images/003.png',
  '003_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png'
    : '/src/assets/images/pokemon-images/003_f2.png',
  '004': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    : '/src/assets/images/pokemon-images/004.png',
  '005': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png'
    : '/src/assets/images/pokemon-images/005.png',
  '006': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
    : '/src/assets/images/pokemon-images/006.png',
  '006_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f2.png'
    : '/src/assets/images/pokemon-images/006_f2.png',
  '006_f3': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006_f3.png'
    : '/src/assets/images/pokemon-images/006_f3.png',
  '007': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
    : '/src/assets/images/pokemon-images/007.png',
  '008': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
    : '/src/assets/images/pokemon-images/008.png',
  '009': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'
    : '/src/assets/images/pokemon-images/009.png',
  '009_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f2.png'
    : '/src/assets/images/pokemon-images/009_f2.png',
  '010': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png'
    : '/src/assets/images/pokemon-images/010.png',
  '011': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png'
    : '/src/assets/images/pokemon-images/011.png',
  '012': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png'
    : '/src/assets/images/pokemon-images/012.png',
  '013': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png'
    : '/src/assets/images/pokemon-images/013.png',
  '014': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png'
    : '/src/assets/images/pokemon-images/014.png',
  '015': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png'
    : '/src/assets/images/pokemon-images/015.png',
  '015_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015_f2.png'
    : '/src/assets/images/pokemon-images/015_f2.png',
  '016': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png'
    : '/src/assets/images/pokemon-images/016.png',
  '017': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png'
    : '/src/assets/images/pokemon-images/017.png',
  '018': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png'
    : '/src/assets/images/pokemon-images/018.png',
  '018_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018_f2.png'
    : '/src/assets/images/pokemon-images/018_f2.png',
  '019': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png'
    : '/src/assets/images/pokemon-images/019.png',
  '019_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019_f2.png'
    : '/src/assets/images/pokemon-images/019_f2.png',
  '020': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png'
    : '/src/assets/images/pokemon-images/020.png',
  '020_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020_f2.png'
    : '/src/assets/images/pokemon-images/020_f2.png',
  '021': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png'
    : '/src/assets/images/pokemon-images/021.png',
  '022': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png'
    : '/src/assets/images/pokemon-images/022.png',
  '023': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png'
    : '/src/assets/images/pokemon-images/023.png',
  '024': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png'
    : '/src/assets/images/pokemon-images/024.png',
  '025': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'
    : '/src/assets/images/pokemon-images/025.png',
  '026': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png'
    : '/src/assets/images/pokemon-images/026.png',
  '026_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026_f2.png'
    : '/src/assets/images/pokemon-images/026_f2.png',
  '027': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png'
    : '/src/assets/images/pokemon-images/027.png',
  '027_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027_f2.png'
    : '/src/assets/images/pokemon-images/027_f2.png',
  '028': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png'
    : '/src/assets/images/pokemon-images/028.png',
  '028_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028_f2.png'
    : '/src/assets/images/pokemon-images/028_f2.png',
  '029': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png'
    : '/src/assets/images/pokemon-images/029.png',
  '030': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png'
    : '/src/assets/images/pokemon-images/030.png',
  '031': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png'
    : '/src/assets/images/pokemon-images/031.png',
  '032': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png'
    : '/src/assets/images/pokemon-images/032.png',
  '033': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png'
    : '/src/assets/images/pokemon-images/033.png',
  '034': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png'
    : '/src/assets/images/pokemon-images/034.png',
  '035': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png'
    : '/src/assets/images/pokemon-images/035.png',
  '036': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png'
    : '/src/assets/images/pokemon-images/036.png',
  '037': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png'
    : '/src/assets/images/pokemon-images/037.png',
  '037_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037_f2.png'
    : '/src/assets/images/pokemon-images/037_f2.png',
  '038': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png'
    : '/src/assets/images/pokemon-images/038.png',
  '038_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038_f2.png'
    : '/src/assets/images/pokemon-images/038_f2.png',
  '039': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png'
    : '/src/assets/images/pokemon-images/039.png',
  '040': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png'
    : '/src/assets/images/pokemon-images/040.png',
  '041': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png'
    : '/src/assets/images/pokemon-images/041.png',
  '042': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png'
    : '/src/assets/images/pokemon-images/042.png',
  '043': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png'
    : '/src/assets/images/pokemon-images/043.png',
  '044': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png'
    : '/src/assets/images/pokemon-images/044.png',
  '045': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png'
    : '/src/assets/images/pokemon-images/045.png',
  '046': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png'
    : '/src/assets/images/pokemon-images/046.png',
  '047': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png'
    : '/src/assets/images/pokemon-images/047.png',
  '048': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png'
    : '/src/assets/images/pokemon-images/048.png',
  '049': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png'
    : '/src/assets/images/pokemon-images/049.png',
  '050': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png'
    : '/src/assets/images/pokemon-images/050.png',
  '050_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050_f2.png'
    : '/src/assets/images/pokemon-images/050_f2.png',
  '051': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png'
    : '/src/assets/images/pokemon-images/051.png',
  '051_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051_f2.png'
    : '/src/assets/images/pokemon-images/051_f2.png',
  '052': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png'
    : '/src/assets/images/pokemon-images/052.png',
  '052_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052_f2.png'
    : '/src/assets/images/pokemon-images/052_f2.png',
  '053': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png'
    : '/src/assets/images/pokemon-images/053.png',
  '053_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053_f2.png'
    : '/src/assets/images/pokemon-images/053_f2.png',
  '054': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png'
    : '/src/assets/images/pokemon-images/054.png',
  '055': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png'
    : '/src/assets/images/pokemon-images/055.png',
  '056': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png'
    : '/src/assets/images/pokemon-images/056.png',
  '057': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png'
    : '/src/assets/images/pokemon-images/057.png',
  '058': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png'
    : '/src/assets/images/pokemon-images/058.png',
  '059': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png'
    : '/src/assets/images/pokemon-images/059.png',
  '060': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png'
    : '/src/assets/images/pokemon-images/060.png',
  '061': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png'
    : '/src/assets/images/pokemon-images/061.png',
  '062': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png'
    : '/src/assets/images/pokemon-images/062.png',
  '063': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png'
    : '/src/assets/images/pokemon-images/063.png',
  '064': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png'
    : '/src/assets/images/pokemon-images/064.png',
  '065': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png'
    : '/src/assets/images/pokemon-images/065.png',
  '065_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065_f2.png'
    : '/src/assets/images/pokemon-images/065_f2.png',
  '066': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png'
    : '/src/assets/images/pokemon-images/066.png',
  '067': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png'
    : '/src/assets/images/pokemon-images/067.png',
  '068': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png'
    : '/src/assets/images/pokemon-images/068.png',
  '069': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png'
    : '/src/assets/images/pokemon-images/069.png',
  '070': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png'
    : '/src/assets/images/pokemon-images/070.png',
  '071': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png'
    : '/src/assets/images/pokemon-images/071.png',
  '072': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png'
    : '/src/assets/images/pokemon-images/072.png',
  '073': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png'
    : '/src/assets/images/pokemon-images/073.png',
  '074': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png'
    : '/src/assets/images/pokemon-images/074.png',
  '074_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074_f2.png'
    : '/src/assets/images/pokemon-images/074_f2.png',
  '075': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png'
    : '/src/assets/images/pokemon-images/075.png',
  '075_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075_f2.png'
    : '/src/assets/images/pokemon-images/075_f2.png',
  '076': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png'
    : '/src/assets/images/pokemon-images/076.png',
  '076_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076_f2.png'
    : '/src/assets/images/pokemon-images/076_f2.png',
  '077': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png'
    : '/src/assets/images/pokemon-images/077.png',
  '078': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png'
    : '/src/assets/images/pokemon-images/078.png',
  '079': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png'
    : '/src/assets/images/pokemon-images/079.png',
  '080': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png'
    : '/src/assets/images/pokemon-images/080.png',
  '080_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080_f2.png'
    : '/src/assets/images/pokemon-images/080_f2.png',
  '081': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png'
    : '/src/assets/images/pokemon-images/081.png',
  '082': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png'
    : '/src/assets/images/pokemon-images/082.png',
  '083': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png'
    : '/src/assets/images/pokemon-images/083.png',
  '084': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png'
    : '/src/assets/images/pokemon-images/084.png',
  '085': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png'
    : '/src/assets/images/pokemon-images/085.png',
  '086': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png'
    : '/src/assets/images/pokemon-images/086.png',
  '087': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png'
    : '/src/assets/images/pokemon-images/087.png',
  '088': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png'
    : '/src/assets/images/pokemon-images/088.png',
  '088_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088_f2.png'
    : '/src/assets/images/pokemon-images/088_f2.png',
  '089': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png'
    : '/src/assets/images/pokemon-images/089.png',
  '089_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089_f2.png'
    : '/src/assets/images/pokemon-images/089_f2.png',
  '090': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png'
    : '/src/assets/images/pokemon-images/090.png',
  '091': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png'
    : '/src/assets/images/pokemon-images/091.png',
  '092': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png'
    : '/src/assets/images/pokemon-images/092.png',
  '093': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png'
    : '/src/assets/images/pokemon-images/093.png',
  '094': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png'
    : '/src/assets/images/pokemon-images/094.png',
  '094_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094_f2.png'
    : '/src/assets/images/pokemon-images/094_f2.png',
  '095': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png'
    : '/src/assets/images/pokemon-images/095.png',
  '096': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png'
    : '/src/assets/images/pokemon-images/096.png',
  '097': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png'
    : '/src/assets/images/pokemon-images/097.png',
  '098': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png'
    : '/src/assets/images/pokemon-images/098.png',
  '099': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png'
    : '/src/assets/images/pokemon-images/099.png',
  '100': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png'
    : '/src/assets/images/pokemon-images/100.png',
  '101': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png'
    : '/src/assets/images/pokemon-images/101.png',
  '102': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png'
    : '/src/assets/images/pokemon-images/102.png',
  '103': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png'
    : '/src/assets/images/pokemon-images/103.png',
  '103_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103_f2.png'
    : '/src/assets/images/pokemon-images/103_f2.png',
  '104': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png'
    : '/src/assets/images/pokemon-images/104.png',
  '105': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png'
    : '/src/assets/images/pokemon-images/105.png',
  '105_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105_f2.png'
    : '/src/assets/images/pokemon-images/105_f2.png',
  '106': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png'
    : '/src/assets/images/pokemon-images/106.png',
  '107': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png'
    : '/src/assets/images/pokemon-images/107.png',
  '108': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png'
    : '/src/assets/images/pokemon-images/108.png',
  '109': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png'
    : '/src/assets/images/pokemon-images/109.png',
  '110': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png'
    : '/src/assets/images/pokemon-images/110.png',
  '111': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png'
    : '/src/assets/images/pokemon-images/111.png',
  '112': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png'
    : '/src/assets/images/pokemon-images/112.png',
  '113': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png'
    : '/src/assets/images/pokemon-images/113.png',
  '114': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png'
    : '/src/assets/images/pokemon-images/114.png',
  '115': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png'
    : '/src/assets/images/pokemon-images/115.png',
  '115_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115_f2.png'
    : '/src/assets/images/pokemon-images/115_f2.png',
  '116': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png'
    : '/src/assets/images/pokemon-images/116.png',
  '117': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png'
    : '/src/assets/images/pokemon-images/117.png',
  '118': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png'
    : '/src/assets/images/pokemon-images/118.png',
  '119': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png'
    : '/src/assets/images/pokemon-images/119.png',
  '120': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png'
    : '/src/assets/images/pokemon-images/120.png',
  '121': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png'
    : '/src/assets/images/pokemon-images/121.png',
  '122': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png'
    : '/src/assets/images/pokemon-images/122.png',
  '123': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png'
    : '/src/assets/images/pokemon-images/123.png',
  '124': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png'
    : '/src/assets/images/pokemon-images/124.png',
  '125': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png'
    : '/src/assets/images/pokemon-images/125.png',
  '126': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png'
    : '/src/assets/images/pokemon-images/126.png',
  '127': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png'
    : '/src/assets/images/pokemon-images/127.png',
  '127_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127_f2.png'
    : '/src/assets/images/pokemon-images/127_f2.png',
  '128': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png'
    : '/src/assets/images/pokemon-images/128.png',
  '129': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png'
    : '/src/assets/images/pokemon-images/129.png',
  '130': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png'
    : '/src/assets/images/pokemon-images/130.png',
  '130_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130_f2.png'
    : '/src/assets/images/pokemon-images/130_f2.png',
  '131': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png'
    : '/src/assets/images/pokemon-images/131.png',
  '132': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png'
    : '/src/assets/images/pokemon-images/132.png',
  '133': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png'
    : '/src/assets/images/pokemon-images/133.png',
  '134': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png'
    : '/src/assets/images/pokemon-images/134.png',
  '135': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png'
    : '/src/assets/images/pokemon-images/135.png',
  '136': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png'
    : '/src/assets/images/pokemon-images/136.png',
  '137': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png'
    : '/src/assets/images/pokemon-images/137.png',
  '138': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png'
    : '/src/assets/images/pokemon-images/138.png',
  '139': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png'
    : '/src/assets/images/pokemon-images/139.png',
  '140': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png'
    : '/src/assets/images/pokemon-images/140.png',
  '141': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png'
    : '/src/assets/images/pokemon-images/141.png',
  '142': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png'
    : '/src/assets/images/pokemon-images/142.png',
  '142_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142_f2.png'
    : '/src/assets/images/pokemon-images/142_f2.png',
  '143': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png'
    : '/src/assets/images/pokemon-images/143.png',
  '144': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png'
    : '/src/assets/images/pokemon-images/144.png',
  '145': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png'
    : '/src/assets/images/pokemon-images/145.png',
  '146': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png'
    : '/src/assets/images/pokemon-images/146.png',
  '147': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png'
    : '/src/assets/images/pokemon-images/147.png',
  '148': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png'
    : '/src/assets/images/pokemon-images/148.png',
  '149': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png'
    : '/src/assets/images/pokemon-images/149.png',
  '150': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png'
    : '/src/assets/images/pokemon-images/150.png',
  '150_f2': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150_f2.png'
    : '/src/assets/images/pokemon-images/150_f2.png',
  '150_f3': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150_f3.png'
    : '/src/assets/images/pokemon-images/150_f3.png',
  '151': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'
    : '/src/assets/images/pokemon-images/151.png',
  '808': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/808.png'
    : '/src/assets/images/pokemon-images/808.png',
  '809': isDev()
    ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/809.png'
    : '/src/assets/images/pokemon-images/809.png',
};

export const getPokemonImage = ({ id }: IPokemon | IPokemonWithBaseCP) => pokemonImages[id] || '';
