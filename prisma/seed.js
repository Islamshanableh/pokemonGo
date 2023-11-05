/* eslint-disable no-restricted-syntax */
const { PrismaClient } = require('@prisma/client');
const XLSX = require('xlsx');
const fs = require('fs');

const prisma = new PrismaClient();

const ReadData = async () => {
  const file = fs.readFileSync('constants/PokemonGo.xlsx');
  const workbook = XLSX.read(file, { type: 'buffer' });

  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(sheet);
  const newData = [];
  data.map(item => {
    const newItem = {
      name: item.Name,
      pokedexNumber: item['Pokedex Number'],
      imgName: item['Img name']?.toString(),
      generation: item.Generation,
      evolutionStage: item['Evolution Stage']?.toString(),
      evolved: item.Evolved,
      familyID: item.FamilyID,
      crossGen: item['Cross Gen'],
      type1: item['Type 1'],
      type2: item['Type 2'],
      weather1: item['Weather 1'],
      weather2: item['Weather 2'],
      statTotal: item['STAT TOTAL'],
      ATK: item.ATK,
      DEF: item.DEF,
      STA: item.STA,
      legendary: item.Legendary,
      aquireable: item.Aquireable,
      spawns: item.Spawns,
      regional: item.Regional,
      raidable: item.Raidable,
      hatchable: item.Hatchable,
      shiny: item.Shiny,
      nest: item.Nest,
      new: item.New,
      notGettable: item['Not-Gettable'],
      futureEvolve: item['Future Evolve'],
      CP40: item['100% CP @ 40'],
      CP39: item['100% CP @ 39'],
    };
    newData.push(newItem);
    return item;
  });
  return newData;
};

const main = async () => {
  const checkData = await prisma.pokemon.count({});
  console.log(checkData);
  if (checkData < 801) {
    const data = await ReadData();
    console.log('hrer', data);
    await prisma.pokemon.createMany({
      data,
      skipDuplicates: true,
    });
  }
  console.log('data insert finished');
};

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
