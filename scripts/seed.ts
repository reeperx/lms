const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Language" },
        { name: "Science" },
        { name: "Geography" },
        { name: "History" },
        { name: "Accounting" },
        { name: "Economics" },
        { name: "Extra Curricular" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();