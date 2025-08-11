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
<h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Institute for Global Development (IGD) - Working together in building a world that is healthy, just, equitable and inclusive
            </p>
          </motion.div>
        </div>
      </section>

      {/* About IGD Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Institute for Global Development (iGD) is a corporation founded in 2008 and registered under Section 25 of India's Companies Registration Act 1956. iGD believes in promoting self-sufficiency and is dedicated to working on issues affecting the poor and marginalized, with a particular emphasis on women and children.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At iGD, we promote preventative health, balanced nutrition, and child development practices in poor communities. To do this, we take a comprehensive strategy, embracing, teaching, and empowering moms and children in their social settings.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that health and well-being are best addressed when all three dimensions — behaviors, systems, and social determinants — are addressed concurrently. We realize that the barriers to well-being are not restricted to health and therefore need to address critical enablers, such as education, in an integrated manner. The need is to prioritize outcomes and scale with high quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                "Working together in building a world that is healthy, just, equitable and inclusive."
              </p>
</motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                "To empower the underserved and marginalized individuals and community through gender-sensitive participatory processes for achieving optimal and sustainable health and development."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Need */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Need</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The Institute for Global Development was founded by a group of like-minded individuals who were inspired to create Primary Health Care after witnessing the need for basic health efforts throughout the country.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, the Institute has a presence in several states in Northern India where people lack access to primary health care, in addition to the government's existing Primary Health Centres.
            </p>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The Institute maintains the following core values:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {aboutData.values.map((value, index) => (
              <motion.div
                key={value.Id}
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

      {/* Our Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Presence</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              IGD India operates across nine Indian states:
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              "Himachal Pradesh",
              "Punjab", 
              "Chandigarh",
              "Haryana",
              "Madhya Pradesh",
              "Gujarat",
              "Maharashtra",
              "Rajasthan",
              "Delhi"
            ].map((state, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-4 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-3">
                    <ApperIcon name="MapPin" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">{state}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Chart */}
      <OrganizationChart />

      import {motion} from "framer-motion";
      import {Card} from "@/components/ui/card";
      import {ApperIcon} from "@/components/ApperIcon";

      export default function InfoSection() {
        (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Tax Exemption Certificates */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="Award" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    Tax Exemption
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Registration Number for 80G:</p>
                      <p className="text-gray-900">AABCI9042GF20215</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Registration Number for 12AA:</p>
                      <p className="text-gray-900">AABCI9042GE20084</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Banking Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="md:col-span-2 lg:col-span-1"
              >
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="CreditCard" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    Banking Details
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Account Number:</p>
                      <p className="text-gray-900">038694600000013</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">IFS Code:</p>
                      <p className="text-gray-900">YESB0000386</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">MICR Code:</p>
                      <p className="text-gray-900">110532062</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Swift Code:</p>
                      <p className="text-gray-900">YESBINBB</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Bank Branch Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="md:col-span-2"
              >
                <Card className="p-6 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name="Building2" className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    Bank Branch
                  </h3>
                  <div className="text-sm text-center">
                    <p className="text-gray-900 leading-relaxed">
                      Yes Bank Ltd., Ground Floor, Plot No, M-31A, M-Block Market,
                      <br />
                      Greater Kailash-II, New Delhi 110048
                    </p>
                  </div>
                </Card>
              </motion.div>

            </div>
          </section>
        )
      }






      {/* About Photos */}
      {/* 
      <PhotoGallery 
        photos={aboutData.photos} 
        title="Our Team & Activities"
      />    

      */}

    </div>
  );
};

export default About;