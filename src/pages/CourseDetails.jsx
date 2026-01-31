import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Clock, User, CheckCircle } from 'lucide-react';
import Spinner from '../components/Spinner';

const CourseDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/courses/${id}`);
      if (!response.ok) {
        navigate('/');
        return;
      }
      const result = await response.json();
      
      if (result.success && result.data) {
        setCourse(result.data);  // ✅ Change: result.data
        setLoading(false);
      } else {
        console.error('Error fetching course:', result.message);
        navigate('/');
      }
    } catch (error) {
      console.error('Error fetching course:', error);
      navigate('/');
    }
  };

  if (loading) return <Spinner />;

  // Safety check - agar course null ho
  if (!course) {
    return (
      <div className="min-h-screen py-20 text-center">
        <p className="text-gray-500 text-lg">Course not found</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Back to Courses
        </button>
      </div>
    );
  }

  const features = [
    'Lifetime Access',
    'Certificate of Completion',
    '24/7 Support',
    'Downloadable Resources',
    'Mobile Friendly'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/')}
          className="text-blue-600 hover:text-blue-800 font-medium mb-8 flex items-center"
        >
          ← Back to Courses
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={course.image} 
              alt={course.title}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            
            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-800">What You'll Get</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-semibold">
                {course.duration} Hours
              </span>
              <div className="flex items-center bg-yellow-50 text-yellow-800 px-4 py-1 rounded-full">
                <Star className="w-5 h-5 fill-current mr-1" />
                <span className="font-bold">{course.rating}</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-600 text-lg mb-6">{course.description}</p>
            
            <div className="flex items-center mb-8">
              <div className="flex items-center text-gray-600 mr-6">
                <User className="w-5 h-5 mr-2" />
                <span className="font-medium">{course.instructor}</span>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Course Price</p>
                  <p className="text-4xl font-bold text-blue-600">${course.price}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-500 text-sm">Value</p>
                  <p className="text-2xl font-bold text-gray-800">${(course.price * 1.5).toFixed(2)}</p>
                  <p className="text-green-600 text-sm font-semibold">Save 33%</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <button
                onClick={() => addToCart(course)}
                className="w-full btn-primary text-lg py-4"
              >
                Add to Cart - ${course.price}
              </button>
              
              <button className="w-full border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300">
                Enroll Now - ${course.price}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
