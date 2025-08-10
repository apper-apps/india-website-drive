import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/atoms/Card';
import Button from '@/components/atoms/Button';
import ApperIcon from '@/components/ApperIcon';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Mock blog posts data
  const mockPosts = [
    {
      id: 1,
      title: "Sustainable Development Goals: Progress and Challenges",
      excerpt: "Examining the current state of SDG implementation and the challenges organizations face in achieving these global objectives.",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      category: "Development",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Community-Based Healthcare Initiatives in Rural Areas",
      excerpt: "How grassroots healthcare programs are transforming medical access and outcomes in underserved communities.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      author: "Michael Chen",
      date: "2024-01-10",
      category: "Healthcare",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Education Technology in Developing Nations",
      excerpt: "Exploring innovative EdTech solutions that are bridging educational gaps and creating new learning opportunities.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      author: "Priya Patel",
      date: "2024-01-05",
      category: "Education",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Climate Change Adaptation Strategies",
      excerpt: "Comprehensive approaches to climate resilience and adaptation in vulnerable communities worldwide.",
      image: "https://images.unsplash.com/photo-1569163139394-de44cb5c4a8b?w=600&h=400&fit=crop",
      author: "James Mitchell",
      date: "2023-12-28",
      category: "Environment",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Women's Economic Empowerment Programs",
      excerpt: "Analyzing successful initiatives that have increased women's participation in economic activities and leadership roles.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      author: "Fatima Al-Rashid",
      date: "2023-12-20",
      category: "Social Impact",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "Digital Financial Inclusion Success Stories",
      excerpt: "How mobile banking and digital payment systems are expanding financial access in emerging markets.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      author: "Robert Kim",
      date: "2023-12-15",
      category: "Finance",
      readTime: "5 min read"
    }
  ];

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(mockPosts);
      } catch (err) {
        setError('Failed to load blog posts');
        console.error('Error loading blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  const getCategoryIcon = (category) => {
    const icons = {
      'Development': 'Target',
      'Healthcare': 'Heart',
      'Education': 'BookOpen',
      'Environment': 'Leaf',
      'Social Impact': 'Users',
      'Finance': 'DollarSign'
    };
    return icons[category] || 'FileText';
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Development': 'bg-blue-100 text-blue-600',
      'Healthcare': 'bg-red-100 text-red-600',
      'Education': 'bg-green-100 text-green-600',
      'Environment': 'bg-emerald-100 text-emerald-600',
      'Social Impact': 'bg-purple-100 text-purple-600',
      'Finance': 'bg-yellow-100 text-yellow-600'
    };
    return colors[category] || 'bg-gray-100 text-gray-600';
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Insights, stories, and updates from our global development initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getCategoryColor(post.category)}`}>
                        <ApperIcon name={getCategoryIcon(post.category)} className="w-3 h-3" />
                        <span>{post.category}</span>
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{post.author}</p>
                          <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="flex items-center space-x-1">
                        <span>Read More</span>
                        <ApperIcon name="ArrowRight" className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ApperIcon name="ChevronLeft" className="w-4 h-4" />
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        currentPage === pageNumber
                          ? 'bg-primary text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ApperIcon name="ChevronRight" className="w-4 h-4" />
                </button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights on global development
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="px-6 py-3">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;