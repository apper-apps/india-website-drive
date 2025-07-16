import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import OrganizationChart from "@/components/organisms/OrganizationChart";
import PhotoGallery from "@/components/organisms/PhotoGallery";
import Card from "@/components/atoms/Card";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { aboutService } from "@/services/api/aboutService";

const About = () => {
  const [aboutData, setAboutData] = useState({
    photos: [],
    values: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadAboutData();
  }, []);

  const loadAboutData = async () => {
    try {
      setLoading(true);
      setError("");
      const [photos, values] = await Promise.all([
        aboutService.getAboutPhotos(),
        aboutService.getValues()
      ]);
      
      setAboutData({
        photos,
        values
      });
    } catch (err) {
      setError("Failed to load about page content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="container mx-auto px-4 py-16">
          <Loading />
        </div>
      </div>
    );
  }

  if (error) {
    return <Error message={error} onRetry={loadAboutData} />;
  }

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About IGD India</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Institute for Global Development, India - Committed to sustainable development 
              and community empowerment across India
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To create sustainable and positive change in communities across India through 
                innovative development programs, capacity building, and strategic partnerships 
                that empower local communities to thrive.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in grassroots development that addresses real needs and creates 
                lasting impact through collaboration, innovation, and commitment to excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To be a leading catalyst for sustainable development in India, creating 
                resilient communities that are equipped with the knowledge, skills, and 
                resources to build a better future for themselves and future generations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision an India where every community has access to quality education, 
                healthcare, and economic opportunities, fostering inclusive growth and development.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutData.values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-6 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={value.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <OrganizationChart />

      {/* About Photos */}
      <PhotoGallery 
        photos={aboutData.photos} 
        title="Our Team & Activities"
      />

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "Users",
                title: "Community-Centered",
                description: "We work directly with communities to understand their needs and co-create solutions that are sustainable and effective."
              },
              {
                icon: "Target",
                title: "Results-Driven",
                description: "Our programs are designed with clear objectives and measurable outcomes to ensure maximum impact and accountability."
              },
              {
                icon: "Handshake",
                title: "Partnership-Based",
                description: "We collaborate with local organizations, government agencies, and international partners to leverage resources and expertise."
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={approach.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;