import { products } from './data';

export async function insertSeedData(ks: any) {
  const keystone = ks.keystone || ks;
  const adapter = keystone.adapters?.MongooseAdapter || keystone.adapter;

  console.log(`🌱 Inserting Seed Data: ${products.length} Products`);
  const { mongoose } = adapter;
  for (const product of products) {
    console.log(`  🛍️ Adding Product: ${product.title}`);

    const { _id } = await mongoose
      .model('ProductImage')
      .create({ image: product.image, altText: product.description });

    product.image = _id;
    await mongoose.model('Product').create(product);
  }
  console.log(`✅ Seed Data Inserted: ${products.length} Products`);
  console.log('👋 Please start the process with `yarn dev` or `npm run dev`');
  process.exit();
}