import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'hw1ycvt9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);

export async function getResumePDFUrl() {
  const query = '*[_type == "resumePDF"]{ resumePDF }[0]';
  try {
    const result = await client.fetch(query);
    const fileReference = result?.resumePDF?.asset?._ref;
    if (fileReference) {
      // Resolve the reference to get the file document
      const fileDocument = await client.getDocument(fileReference);
      console.log('File document:', fileDocument);
      const pdfUrl = fileDocument?.url;
      return pdfUrl || '';
    }
    return '';
  } catch (error) {
    console.error('Error fetching data:', error);
    return '';
  }
}