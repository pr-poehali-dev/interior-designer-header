import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['portfolio', 'about', 'services', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const portfolioItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/ad170e94-580e-4985-b070-ec9f7e517d0e/files/69aa1108-4e16-43ae-9f48-da1acc5489b9.jpg',
      title: 'Современная гостиная',
      category: 'Жилые интерьеры'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/ad170e94-580e-4985-b070-ec9f7e517d0e/files/45d36580-9805-4c72-914f-feb60fcfc759.jpg',
      title: 'Элегантная спальня',
      category: 'Жилые интерьеры'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/ad170e94-580e-4985-b070-ec9f7e517d0e/files/a5e535bb-244f-4e2f-abcb-f3ab9301f7b7.jpg',
      title: 'Минималистичная кухня',
      category: 'Жилые интерьеры'
    }
  ];

  const services = [
    {
      icon: 'Home',
      title: 'Дизайн жилых помещений',
      description: 'Создание уютных и функциональных пространств для жизни'
    },
    {
      icon: 'Building2',
      title: 'Коммерческие проекты',
      description: 'Офисы, рестораны, магазины — пространства для бизнеса'
    },
    {
      icon: 'Pencil',
      title: 'Авторский надзор',
      description: 'Контроль реализации проекта на всех этапах строительства'
    },
    {
      icon: 'Palette',
      title: 'Подбор материалов',
      description: 'Помощь в выборе отделочных материалов и мебели'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Соколова',
      text: 'Превосходная работа! Дизайнер учел все наши пожелания и создал интерьер мечты.',
      rating: 5
    },
    {
      name: 'Михаил Петров',
      text: 'Профессиональный подход, внимание к деталям. Результат превзошел ожидания!',
      rating: 5
    },
    {
      name: 'Елена Волкова',
      text: 'Спасибо за красивый и функциональный дизайн нашей квартиры. Очень довольны!',
      rating: 5
    }
  ];

  const menuItems = [
    { id: 'portfolio', label: 'Портфолио' },
    { id: 'about', label: 'О нас' },
    { id: 'services', label: 'Услуги' },
    { id: 'testimonials', label: 'Отзывы' },
    { id: 'contact', label: 'Контакты' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xl font-light tracking-wide hover:text-accent transition-colors"
            >
              Interior Design
            </button>
            
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light hover:text-accent transition-colors relative ${
                    activeSection === item.id ? 'text-accent' : ''
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent" />
                  )}
                </button>
              ))}
            </div>
            
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Связаться
            </Button>
          </div>
        </div>
      </nav>
      <section className="relative h-screen flex items-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/ad170e94-580e-4985-b070-ec9f7e517d0e/files/69aa1108-4e16-43ae-9f48-da1acc5489b9.jpg')`,
            filter: 'blur(8px) brightness(0.7)',
            transform: 'scale(1.1)'
          }}
        />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in">
              <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-tight">
                Interior Design
              </h1>
              <p className="text-xl md:text-2xl font-light mb-8 text-white/90">
                Создаём пространства, которые вдохновляют
              </p>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Связаться с нами
              </Button>
            </div>
            
            <div className="hidden md:block animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/ad170e94-580e-4985-b070-ec9f7e517d0e/files/45d36580-9805-4c72-914f-feb60fcfc759.jpg"
                alt="Interior Design"
                className="rounded-sm shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-light mb-4">Портфолио</h2>
            <p className="text-muted-foreground text-lg">Наши завершённые проекты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {portfolioItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/ad170e94-580e-4985-b070-ec9f7e517d0e/files/a5e535bb-244f-4e2f-abcb-f3ab9301f7b7.jpg"
                alt="О дизайнере"
                className="rounded-sm shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="animate-fade-in">
              <h2 className="text-5xl font-light mb-6">О мастере</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Более 10 лет я создаю уникальные интерьеры, которые отражают 
                  индивидуальность и стиль жизни моих клиентов.
                </p>
                <p>
                  Моя философия — минимализм в деталях, максимум комфорта в 
                  использовании. Каждый проект — это история, рассказанная через 
                  пространство, свет и материалы.
                </p>
                <p>
                  Работаю с жилыми и коммерческими объектами, веря в то, что 
                  правильно спроектированное пространство меняет жизнь к лучшему.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-light text-accent mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-accent mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-light mb-4">Услуги</h2>
            <p className="text-muted-foreground text-lg">Что мы предлагаем</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
                  <Icon name={service.icon} size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-light mb-4">Отзывы</h2>
            <p className="text-muted-foreground text-lg">Что говорят наши клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 border-0 shadow-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <p className="font-medium">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-5xl font-light mb-4">Контакты</h2>
              <p className="text-muted-foreground text-lg">Свяжитесь с нами для консультации</p>
            </div>
            
            <Card className="p-8 md:p-12 border-0 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <Input 
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-lg"
                >
                  Отправить сообщение
                </Button>
              </form>
              
              <div className="mt-12 pt-12 border-t grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <Icon name="Phone" size={24} className="mx-auto mb-3 text-accent" />
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <p className="font-medium">+7 (999) 123-45-67</p>
                </div>
                <div>
                  <Icon name="Mail" size={24} className="mx-auto mb-3 text-accent" />
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">hello@interior.design</p>
                </div>
                <div>
                  <Icon name="MapPin" size={24} className="mx-auto mb-3 text-accent" />
                  <p className="text-sm text-muted-foreground">Адрес</p>
                  <p className="font-medium">Москва, Россия</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-light mb-4">Interior Design Studio</p>
          <p className="text-sm opacity-80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;