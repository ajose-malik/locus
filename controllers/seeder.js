const express = require('express');
const seedRouter = express.Router();
const faker = require('faker/locale/en_US');
const Elsewhere = require('../models/elsewhere');
const cities = require('../seeds/cities');

const { SEEDER } = process.env;

seedRouter.get(`/${SEEDER}`, async (req, res) => {
	const imageUrl = [
		'https://source.unsplash.com/collection/289662',
		'https://source.unsplash.com/collection/429524',
		'https://source.unsplash.com/collection/1023843'
	];

	for (let i = 0; i < 100; i++) {
		const randGen = Math.floor(Math.random() * cities.length);
		const randUrl = Math.floor(Math.random() * imageUrl.length);
		const url = imageUrl[randUrl];

		const elsewhere = new Elsewhere({
			author: '5ff727c6d135dc3ca7c3bbbb',
			location: `${cities[randGen].city}, ${cities[randGen].state}`,
			title: faker.lorem.word(),
			description: faker.lorem.paragraph(),
			image: [
				{
					url,
					filename: `Elsewhere/${faker.lorem.word()}`
				}
			],
			geometry: {
				type: 'Point',
				coordinates: [cities[randGen].longitude, cities[randGen].latitude]
			}
		});

		await elsewhere.save();
	}
	res.send('seeded!!!');
});

module.exports = seedRouter;
