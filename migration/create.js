import db from '../models/db';

const createUsers = `CREATE TABLE IF NOT EXISTS Users(
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) UNIQUE NOT NULL,
  "phoneNumber" VARCHAR(255) NOT NULL,
  "passportUrl" VARCHAR(255) NOT NULL,
  registered TIMESTAMP DEFAULT NOW(),
  "isAdmin" BOOLEAN DEFAULT fasle
)`

db.query(createUsers).then((user) => {
	console.log(user)
}).catch((err) => {
	console.log(err)
})

const createParty = `CREATE TABLE IF NOT EXISTS parties(
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(255) NOT NULL,
  "hqAddress" VARCHAR(255) NOT NULL,
  "logoUrl" VARCHAR(255) NOT NULL
)`

db.query(createParty).then((party) => {
	console.log(party)
}).catch((err) => {
	console.log(err.stack)
})

const createOffice = `CREATE TABLE IF NOT EXISTS offices(
  id SERIAL PRIMARY KEY,
  type VARCHAR(255) NOT NULL
  "name" VARCHAR(255) NOT NULL,
)`

db.query(createOffice).then((office) => {
	console.log(office)
}).catch((err) => {
	console.log(err)
})

const createCandidate = `CREATE TABLE IF NOT EXISTS candidates(
  id SERIAL PRIMARY KEY,
  office INT UNIQUE NOT NULL REFERENCES Office(id) ON DELETE CASCADE,
  party INT NOT NULL REFERENCES Party(id) ON DELETE CASCADE
  candidate INT UNIQUE NOT NULL REFERENCES Users(id) ON DELETE CASCADE,
)`

db.query(createCandidate).then((candidate) => {
	console.log(candidate)
}).catch((err) => {
	console.log(err)
})
