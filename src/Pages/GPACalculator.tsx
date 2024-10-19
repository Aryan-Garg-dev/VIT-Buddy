import { calculateTotalCoursesCredits, credits, GradeCreditList, grades, validateList } from "@/lib/services/gpaCalculator"
import { useRef, useState } from "react"
import "../App.css"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  Drawer,
  // DrawerClose,
  DrawerContent,
  DrawerDescription,
  // DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  // DrawerTrigger,
} from "@/components/ui/drawer"


import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react"
import { colors } from "@/constants/colorMarker"
import { toast } from "sonner"
import { useTheme } from "@/components/theme-provider"
import { calculateGPA } from './../lib/services/gpaCalculator';
import GradualSpacing from "@/components/ui/gradual-spacing"
import { useIsMobile } from "@/hooks/useIsMobile"

const baseList: GradeCreditList = Array(5).fill(null).map(()=>({ Grade: "", Credits: 0 }));
const baseColorsList: string[] = Array(baseList.length).fill(""); 

const disableContextMenu = (e: React.MouseEvent | React.TouchEvent)=>{
  e.preventDefault();
  e.stopPropagation();
}

export const GPACalculator = ()=>{
  const [gradeCreditList, setGradeCreditList] = useState<GradeCreditList>(baseList);
  const [creditsList, setCreditsList] = useState<number[]>(credits);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [colorsList, setColorsList] = useState<string[]>(baseColorsList);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [GPA, setGPA] = useState(0);
  const isMobile = useIsMobile();
  
  const updateGrade = (index: number, grade: string)=>{
    const updatedList: GradeCreditList = gradeCreditList.map((item, idx)=>
      idx == index ? { ...item, Grade: grade } : item
    );
    // console.log(grade)
    setGradeCreditList(updatedList);
  }
  const updateCredit = (index: number, credits: number)=>{
    const updatedList: GradeCreditList = gradeCreditList.map((item, idx)=>
      idx == index ? { ...item, Credits: credits } : item
    );
    // console.log(credits)
    setGradeCreditList(updatedList);
  }

  const handleReset = ()=>{
    setGradeCreditList(baseList);
    setColorsList(baseColorsList);
  }

  const addNew = (grade: string, credit: number)=>{
    const updatedList = [...gradeCreditList, { Grade: grade, Credits: credit }];
    const updatedColorsList = [...colorsList, ""];
    setGradeCreditList(updatedList)
    setColorsList(updatedColorsList);
  }

  const handleDelete = (index: number)=>{
    const updatedList = gradeCreditList.filter((_, idx) => idx !== index);
    if (updatedList.length < baseList.length) updatedList.push({ Grade: "", Credits: 0 })
    const updatedColorsList = colorsList.filter((_, idx) => idx !== index) 
    setGradeCreditList(updatedList);
    setColorsList(updatedColorsList);
  }

  const handleAddNewCredits = (credits: number)=>{
    if (credits == 0){
      toast.error("Enter a value greater than 0");
      return;
    }
    if (creditsList.includes(credits)){
      toast.error(`${credits} already present in the list`);
      return;
    }
    const updatedList = [...creditsList, credits]
    setCreditsList(updatedList);
    setIsDialogOpen(false);
  }

  const handleColorChange = (index: number, color: string)=>{
    const updatedList = colorsList.map((prev, idx)=>
      idx == index ? color : prev
    );
    setColorsList(updatedList);
  }

  const handleCalculateGPA = ()=>{
    if (!validateList(gradeCreditList)){
      toast.error("Please check the inputs provided");
      return;
    }
    setGPA(calculateGPA(gradeCreditList));
    setIsDrawerOpen(true);
  }

  return (
    <div className="min-h-full flex flex-col items-center">
      <Card className="bg-primary-foreground lg:min-w-[50%] max-w-[700px] mt-2 mx-2 select-none shadow-xl">
        <ContextMenu>
          <ContextMenuTrigger disabled={isMobile}>
            <CardHeader>
              <CardTitle className="font-cursive text-4xl md:text-5xl text-center tracking-wide">GPA Calculator</CardTitle>
              <CardDescription className="font-josephinBold text-xl md:text-2xl text-center">Enter your grades and credits for each subject completed this semester!</  CardDescription>
            </CardHeader>
            {/* Scrollable */}
            <CardContent className="space-y-2">
              <TotalCoursesCredits gradeCreditList={gradeCreditList} />
              {gradeCreditList.map((item, index)=>(
                <GradeCreditInput 
                  key={index} 
                  credits={item.Credits != 0 ? `${item.Credits}` : ""}
                  grade={item.Grade}
                  onCreditChange={(credits: string)=>updateCredit(index, Number(credits))} 
                  onGradeChange={(grade: string)=>updateGrade(index, grade)}
                  onDelete={()=>handleDelete(index)}
                  creditsList={creditsList}
                  color={colorsList[index]}
                  onColorChange={(color: string)=>handleColorChange(index, color)}
                />
              ))}
            </CardContent>
            <CardFooter className="grid grid-cols-3 content-between md:mx-8 max-md:grid-cols-2 gap-4">
              <Button 
                variant={"secondary"} 
                className="font-semibold text-muted-foreground max-sm:order-1" 
                onClick={()=>addNew("", 0)}
                onContextMenu={disableContextMenu}
              >
                Add More
              </Button>
              <Button 
                variant={"secondary"} 
                className="font-poppins font-semibold text-muted-foreground max-sm:order-3 max-sm:col-span-2" 
                onClick={handleCalculateGPA}
                onContextMenu={disableContextMenu}
              >
                Calculate GPA
              </Button>
              {isMobile && <Button 
                variant={"secondary"} 
                className="font-poppins font-semibold text-muted-foreground max-sm:order-4 max-sm:col-span-2" 
                onClick={()=>setIsDialogOpen(true)}
                onContextMenu={disableContextMenu}
              >
                Add Credit Option
              </Button>}
              <Button 
                variant={"secondary"} 
                className="font-poppins font-semibold text-muted-foreground max-sm:order-2" 
                onClick={handleReset}
                onContextMenu={disableContextMenu}
              >
                Reset
              </Button>
            </CardFooter>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem className="font-poppins" onClick={()=>addNew("", 0)}>Add More</ContextMenuItem>
            <ContextMenuItem className="font-poppins pr-5" onClick={()=>setIsDialogOpen(true)}>Add Credit Option</ContextMenuItem>
            <ContextMenuItem className="font-poppins" onClick={handleCalculateGPA}>Calculate GPA</ContextMenuItem>
            <ContextMenuItem className="font-poppins" onClick={handleReset}>Reset</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </Card>
      <AddNewCredits 
        isOpen={isDialogOpen} 
        setIsOpen={()=>setIsDialogOpen(isOpen=>!isOpen)}
        handleSave={(value: number)=>handleAddNewCredits(value)}
      />
      <GPALookup open={isDrawerOpen} setIsOpen={()=>setIsDrawerOpen(open=>!open)} gpa={GPA} />
    </div>
  )
}

const GradeCreditInput = ({ 
  onGradeChange, onCreditChange, onDelete, grade, credits, creditsList, color, onColorChange
}: { 
  onGradeChange: (grade: string)=>void, 
  onCreditChange: (credits: string)=>void,
  onColorChange: (color: string)=>void, 
  onDelete: ()=>void, 
  credits: string,
  creditsList: number[],
  grade: string,
  color: string
})=>{
  //onDelete, onGradeChange, onCreditChange, index
  return (
    <div className="w-full flex items-center gap-2">
      <div className="max-sm:hidden"><ColorMarker value={color} onChange={onColorChange} /></div>
      {/* <Button variant={"outline"} className="bg-primary-foreground max-sm:px-2 sm:hidden"><Type className="text-muted-foreground size-4" /></Button> */}
      <SelectGrade onChange={onGradeChange} value={grade} />
      <SelectCredits onChange={onCreditChange} value={credits} values={creditsList} />
      <Button variant={"outline"} className="bg-primary-foreground max-sm:px-2" onClick={onDelete} onContextMenu={disableContextMenu}>
        <Trash2 className="size-4 text-muted-foreground" />
      </Button>
    </div>
  )
};

const ColorMarker = ({
  value, onChange
}: {
  value: string,
  onChange: (color: string)=>void
})=>{
  const { theme } = useTheme();

  return (
    <HoverCard>
      <HoverCardTrigger onContextMenu={disableContextMenu}><div 
        style={{backgroundColor: value ? value : theme == "dark" ? "#121212" : "#F5F5F7"}} 
        className="h-8 w-8 rounded-full" 
      /></HoverCardTrigger>
      <HoverCardContent className="w-fit p-2 px-3 rounded-xl">
        <ToggleGroup type={"single"} className="w-fit space-x-2" onValueChange={(value)=>onChange(value)}>
          {colors.map(color=>(
            <ToggleGroupItem value={color} key={color} className="rounded-full w-8 h-8" variant={"outline"} style={{backgroundColor: color}} />
          ))}
        </ToggleGroup>
      </HoverCardContent>
    </HoverCard>
  )
}

const SelectGrade = ({ 
  value,
  onChange 
}: { 
  value: string
  onChange: (value: string)=>void
})=>{
  return (
    <Select onValueChange={onChange} value={value && value}>
      <SelectTrigger 
        onContextMenu={disableContextMenu}
        className="font-poppins font-medium bg-background"
      ><SelectValue placeholder="Grade" /></SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="font-poppins text-muted-foreground text-center">Grade</SelectLabel>
          {Object.keys(grades).map((grade, index)=>(
            <SelectItem key={index} value={grade}>{grade}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
const SelectCredits = ({ 
  value,
  onChange,
  values
}: { 
  value: string
  onChange: (value: string)=>void
  values: number[]
})=>{
  return (
    <Select onValueChange={onChange} value={value && value}>
      <SelectTrigger 
        onContextMenu={disableContextMenu}
        
        className="font-poppins font-medium bg-background"
      >
        <SelectValue placeholder="Credits" /></SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectLabel className="font-poppins text-muted-foreground text-center">Credits</SelectLabel>
          {values.map((credit, index)=>(
            <SelectItem key={index} value={`${credit}`}>{credit}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

const TotalCoursesCredits = ({
  gradeCreditList
}: {
  gradeCreditList: GradeCreditList
})=>{
  const { Courses, Credits } = calculateTotalCoursesCredits(gradeCreditList);
  return (
    <div className="py-1.5 border rounded-lg shadow-sm w-full flex justify-around">
      <div className="font-poppins text-muted-foreground"><span className="font-semibold">Courses:</span> {Courses}</div>
      <div className="font-poppins text-muted-foreground"><span className="font-semibold">Credits:</span> {Credits}</div>
    </div>
  )
}

const AddNewCredits = ({
  isOpen, setIsOpen, handleSave
}: {
  isOpen: boolean,
  setIsOpen: ()=>void
  handleSave: (value: number)=>void
})=>{
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-primary-foreground">
        <DialogHeader>
          <DialogTitle className="font-poppins text-xl">Add another credit option...</DialogTitle>
          <DialogDescription className="font-poppins md:text-base">If your are not able to find appropriate credits for your subject, you can add one here.</DialogDescription>
        </DialogHeader>
        <div className="flex gap-2 items-center">
          <Label htmlFor="credits" className="mr-5 text-nowrap text-2xl font-cursive font-medium">{"Credits :"}</Label>
          <Input id="credits" type="number" placeholder="0" className="w-full" ref={inputRef} />
        </div>
        <DialogFooter>
          <Button variant={"outline"} onClick={()=>handleSave(Number(inputRef.current?.value || '0'))} className="text-muted-foreground bg-primary-foreground font-poppins ">Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const GPALookup = ({
  open,
  setIsOpen,
  gpa
}: {
  open: boolean,
  gpa: number
  setIsOpen: ()=>void
})=>{
  return (
    <Drawer open={open} onOpenChange={setIsOpen}>
      <DrawerContent className="mb-5 bg-primary-foreground">
        <DrawerHeader className="mt-4">
          <DrawerTitle className="font-cursive text-4xl md:text-5xl tracking-wide text-center">Your GPA</DrawerTitle>
          <DrawerDescription className="font-josephinBold tracking-wide text-xl md:text-2xl text-center">This is calculated based on the inputs you provided.</DrawerDescription>
        </DrawerHeader>
        <GradualSpacing className="text-center text-7xl md:text-8xl  tracking-tighter font-bold font-poppins" text={`${gpa}`}></GradualSpacing>
      </DrawerContent>
    </Drawer>
  )
}
