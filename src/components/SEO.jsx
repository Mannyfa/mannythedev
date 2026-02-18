import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description }) {
  const siteTitle = "Manny The Dev"; 
  const siteUrl = "https://mannythedev.com"; // Replace with your actual deployed URL later

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}