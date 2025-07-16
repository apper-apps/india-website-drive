import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroSlider from "@/components/organisms/HeroSlider";
import PhotoGallery from "@/components/organisms/PhotoGallery";
import Card from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { homeService } from "@/services/api/homeService";

const Home = () => {
  const navigate = useNavigate();
  const [homeData, setHomeData] = useState({
    sliderImages: [],
    photos: [],
    stats: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    try {
      setLoading(true);
      setError("");
      const [sliderImages, photos, stats] = await Promise.all([
        homeService.getSliderImages(),
        homeService.getHomePhotos(),
        homeService.getStats()
      ]);
      
      setHomeData({
        sliderImages,
        photos,
        stats
      });
    } catch (err) {
      setError("Failed to load home page content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-8">
        <Loading type="hero" />
        <div className="container mx-auto px-4">
          <Loading type="gallery" />
        </div>
      </div>
    );
  }

  if (error) {
    return <Error message={error} onRetry={loadHomeData} />;
  }

  return (
    <div className="space-y-0">
      {/* Hero Slider */}
      <HeroSlider 
        slides={homeData.sliderImages.map(slide => ({
          ...slide,
          ctaAction: () => navigate("/about")
        }))}
      />

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Communities Through Sustainable Development
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              The Institute for Global Development, India (IGD India) is committed to creating lasting positive change 
              in communities across India through innovative programs, community partnerships, and sustainable development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/about")}
              >
                Learn More About Us
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/contact")}
              >
                Get Involved
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/90">
              Making a difference in communities across India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeData.stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-center p-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={stat.icon} className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg font-medium mb-1">{stat.label}</div>
                  <div className="text-sm text-white/80">{stat.description}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "GraduationCap",
                title: "Education",
                description: "Providing quality education and skill development programs to empower communities."
              },
              {
                icon: "Heart",
                title: "Healthcare",
                description: "Improving healthcare access and promoting wellness in underserved communities."
              },
              {
                icon: "Sprout",
                title: "Sustainable Development",
                description: "Implementing eco-friendly practices and sustainable development initiatives."
              }
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ApperIcon name={area.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <PhotoGallery 
        photos={homeData.photos} 
        title="Our Work in Action"
      />

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Together, we can create sustainable change and build stronger communities across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2"
              >
                <ApperIcon name="Phone" className="w-5 h-5" />
                Contact Us
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate("/about")}
                className="flex items-center gap-2"
              >
                <ApperIcon name="Users" className="w-5 h-5" />
                Learn About Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;