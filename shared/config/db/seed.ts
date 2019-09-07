import { db } from '.';

db.seed.run()
  .then(() => {
    console.log('Seeding complete!');
    process.exit(0);
  })
  .catch((e: Error) => {
    console.error(e);
    process.exit(1);
  });
