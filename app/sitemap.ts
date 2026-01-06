import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://interhospital.com.ec',
      lastModified: new Date(),
    },
    {
      url: 'https://interhospital.com.ec/encuesta',
      lastModified: new Date(),
    },
    {
      url: 'https://interhospital.com.ec/contactanos',
      lastModified: new Date(),
    },
    {
      url: 'https://interhospital.com.ec/medicos',
      lastModified: new Date(),
    },
    {
      url: 'https://interhospital.com.ec/nosotros',
      lastModified: new Date(),
    },
    {
      url: 'https://interhospital.com.ec/pacientes',
      lastModified: new Date(),
    },
    {
      url: 'https://interhospital.com.ec/servicios',
      lastModified: new Date(),
    },
  ];
}
