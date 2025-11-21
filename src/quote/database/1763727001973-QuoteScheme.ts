import { MigrationInterface, QueryRunner } from 'typeorm';

export class QuoteScheme1763727001973 implements MigrationInterface {
  name = 'QuoteScheme1763727001973';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "quote" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quote" varchar(100) NOT NULL, "author" varchar(20) NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "quote"`);
  }
}
