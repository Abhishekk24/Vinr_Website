import { GanttChartSquare, Blocks, Gem } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const servicedata = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'XYZ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum velit dolorum in dolor eius? Accusantium eius, beatae molestiae est natus maiores asperiores vero necessitatibus praesentium, dolorum provident eaque voluptatum!'
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'XYZ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum velit dolorum in dolor eius? Accusantium eius, beatae molestiae est natus maiores asperiores vero necessitatibus praesentium, dolorum provident eaque voluptatum!'
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'XYZ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum velit dolorum in dolor eius? Accusantium eius, beatae molestiae est natus maiores asperiores vero necessitatibus praesentium, dolorum provident eaque voluptatum!'
  },
]

const Services = () => {
  return (
    <section className='pb-12 xl:py-24 sm:py-48'>
      <div className="container mx-auto">
        <h2 className='section-title pb-12 xl:pb-36 text-center mx-auto'>Services</h2>
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8' >
          {servicedata.map((item,index)=>{
            return(
              <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center rounded-[50px]'>
                    {item.icon}
                  </div>

                </CardHeader>
                <CardContent className='text-center'>
                 <CardTitle className='mb-2'> {item.title}</CardTitle>
                 <CardDescription className='text-lg'>{item.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services