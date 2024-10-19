import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { Input } from "@/components/ui/input";
import { calculateCGPA, calculateTotalSemCredits, GPACredit, validateGPACreditList } from "@/lib/services/cgpaCalculator"
import { Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const baseList: GPACredit[] = Array(5).fill(null).map(()=>({ GPA: 0, Credits: 0 }));

export const CGPACalculator = ()=>{
  const [GPACreditsList, setGPACreditsList] = useState<GPACredit[]>(baseList);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [CGPA, setCGPA] = useState<number>(0);

  const handleGPAChange = (index: number, GPA: number)=>{
    if (GPA > 10) toast.error("Enter a value less than or equal to 10");
    const updatedList = GPACreditsList.map((item, idx)=>
      idx == index ? { ...item, GPA: GPA }: item
    )
    setGPACreditsList(updatedList);
  }
  
  const handleCreditsChange = (index: number, credits: number)=>{
    if (credits > 50) toast.error("Enter a value less than or equal to 50");
    const updatedList = GPACreditsList.map((item, idx)=>
      idx == index ? { ...item, Credits: credits } : item
    )
    setGPACreditsList(updatedList);
  }

  const handleAddMore = (GPA: number, credits: number)=>{
    const updatedList = [ ...GPACreditsList, { GPA: GPA, Credits: credits } ];
    setGPACreditsList(updatedList);
  }

  const handleReset = ()=>{
    setGPACreditsList(baseList);
  }

  const handleDelete = (index: number)=>{
    const updatedList = GPACreditsList.filter((_, idx)=>idx !== index);
    if (updatedList.length < baseList.length) updatedList.push({ Credits: 0, GPA: 0 });
    console.log(updatedList);
    setGPACreditsList(updatedList);
  }

  const handleCalculateCGPA = ()=>{
    if (!validateGPACreditList(GPACreditsList)){
      toast.error("Please check the inputs provided");
      return;
    }
    setCGPA(calculateCGPA(GPACreditsList));
    setIsDrawerOpen(true);
  }

  return (
    <div className="min-h-full flex flex-col items-center">
      <Card className="bg-primary-foreground lg:min-w-[50%] max-w-[700px] mt-2 mx-2 select-none shadow-xl">
        <CardHeader>
          <CardTitle className="font-cursive text-4xl md:text-5xl text-center tracking-wide">CGPA Calculator</CardTitle>
          <CardDescription className="font-josephinBold text-xl md:text-2xl text-center">
            Enter the GPA obtained and total credits for each semester.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <TotalSemCredits GPACreditsList={GPACreditsList} />
          {GPACreditsList.map((_, index)=>(
            <GPACreditsInput 
              key={index}
              index={index+1}
              onCreditsChange={(credits: number)=>handleCreditsChange(index, credits)}
              onGPAChange={(GPA: number)=>handleGPAChange(index, GPA)}
              onDelete={()=>handleDelete(index)}
              GPACreditList={GPACreditsList}
            />
          ))}
        </CardContent>
        <CardFooter className="grid grid-cols-3 content-between md:mx-8 max-sm:grid-cols-2 gap-4">
          <Button 
            variant={"secondary"} 
            className="font-semibold text-muted-foreground max-sm:order-1" 
            onClick={()=>handleAddMore(0, 0)}
          >
            Add More
          </Button>
          <Button 
            variant={"secondary"} 
            className="font-poppins font-semibold text-muted-foreground max-sm:order-3 max-sm:col-span-2" 
            onClick={handleCalculateCGPA}
          >
            Calculate CGPA
          </Button>
          <Button 
            variant={"secondary"} 
            className="font-poppins font-semibold text-muted-foreground max-sm:order-2" 
            onClick={handleReset}
          >
            Reset
          </Button>
        </CardFooter>
      </Card>
      <CGPALookup open={isDrawerOpen} setIsOpen={()=>setIsDrawerOpen(open=>!open)} cgpa={CGPA} />
    </div>
  )
}


const TotalSemCredits = ({ 
  GPACreditsList 
} : {
  GPACreditsList: GPACredit[]
})=>{
  const { Semesters, Credits } = calculateTotalSemCredits(GPACreditsList);
  return (
    <div className="py-1.5 border rounded-lg shadow-sm w-full flex justify-around">
      <div className="font-poppins text-muted-foreground"><span className="font-semibold">Semesters:</span> {Semesters}</div>
      <div className="font-poppins text-muted-foreground"><span className="font-semibold">Credits:</span> {Credits}</div>
    </div>
  )
}

const GPACreditsInput = ({
  onGPAChange, onCreditsChange, onDelete, GPACreditList, index
}: {
  onGPAChange: (GPA: number)=>void,
  onCreditsChange: (credits: number)=>void,
  onDelete: ()=>void,
  GPACreditList: GPACredit[],
  index: number,
})=>{
  const GPA = GPACreditList[index-1].GPA;
  const credits = GPACreditList[index-1].Credits;
  return (
    <div className="w-full flex items-center gap-2">
      <Button className="bg-primary-foreground font-thin font-poppins max-sm:px-2 min-w-8" variant={"outline"} disabled>{index}</Button>
      <Input 
        type="number" placeholder="GPA" 
        onChange={(e)=>onGPAChange(Number(e.target.value))} 
        value={GPA != 0 ? GPA : ""} 
        className="font-poppins bg-background focus-visible:ring-1 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-400 custom-number-input"
      />
      <Input 
        type="number" placeholder="Credits" 
        onChange={(e)=>onCreditsChange(Number(e.target.value))} 
        value = {credits != 0 ? credits : ""} 
        className="font-poppins bg-background focus-visible:ring-1 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-400 custom-number-input"
      />
      <Button variant={"outline"} className="bg-primary-foreground max-sm:px-2" onClick={onDelete}>
        <Trash2 className="size-4 text-muted-foreground" />
      </Button>
    </div>
  )
}

const CGPALookup = ({
  open,
  setIsOpen,
  cgpa
}: {
  open: boolean,
  cgpa: number
  setIsOpen: ()=>void
})=>{
  return (
    <Drawer open={open} onOpenChange={setIsOpen}>
      <DrawerContent className="mb-5 bg-primary-foreground">
        <DrawerHeader className="mt-4">
          <DrawerTitle className="font-cursive text-4xl md:text-5xl tracking-wide text-center">Your GPA</DrawerTitle>
          <DrawerDescription className="font-josephinBold tracking-wide text-xl md:text-2xl text-center">This is calculated based on the inputs you provided.</DrawerDescription>
        </DrawerHeader>
        <GradualSpacing className="text-center text-7xl md:text-8xl  tracking-tighter font-bold font-poppins" text={`${cgpa}`}></GradualSpacing>
      </DrawerContent>
    </Drawer>
  )
}
