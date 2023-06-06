import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'hw1ycvt9',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  token: 'sklu40JCnQ9UdcOhOLSb1T0IIzLEExeo9I0EdWzM4kXMELtytWKggAo20Fl5BFmuE52Vpziuca1bwJS3ipcAdLl1DfzN6bWabflWQ2MZ9fSfaOAc2DZNMzQthdKHJWWfVZ6wHDNkhc4HAvSzYvR2dYHU2KIbdB0DbGHwx9R0zXgSKRXOiScB'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)