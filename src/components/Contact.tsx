import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-primary text-sm font-mono tracking-wider mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Let's connect
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-8 max-w-md mx-auto text-sm"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Open to opportunities in automation, backend, and DevOps. Feel free to reach out directly.
        </motion.p>
        <motion.a
          href="mailto:mishalreuel@gmail.com"
          className="inline-block px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Say Hello
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
