export default function ContactFormEmbed() {
  return (
    <section className="w-full flex justify-center py-12 bg-white dark:bg-[#181823] transition-colors">
      <div style={{ width: '600px', height: '500px', position: 'relative', maxWidth: '100%' }}>
        <iframe
          width="100%"
          height="500px"
          src="https://forms.vagaro.com/FormResponse/gSyKI6gW2pZiDB7s3DpSrx3zbekJA6aO5Zn2LByZCosW?embeded=true"
          style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
          frameBorder={0}
          marginWidth={0}
          marginHeight={0}
          title="Contact Us"
        >
          Loading...
        </iframe>
      </div>
    </section>
  );
}
