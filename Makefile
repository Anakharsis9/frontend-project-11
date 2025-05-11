install:
	npm ci --legacy-peer-deps

develop:
	npm run dev

lint:
	npx eslint .

build:
	NODE_ENV=production npm run build

test:
	echo no tests
