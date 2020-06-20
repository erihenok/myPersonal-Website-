
/*
public class Exam {
					static final double MULTIPLIER = 0.0322 ;
					public static double getMultiplier(){
								 return MULTIPLIER;
} }


 public class Exam {
	
	int age= 0;
	String name = "henok";
	
					static int count = 0;
					
					public static void setCount(int newCount){
								 count = newCount;
} }


abstract class Shape {
		 void draw(){
			  System.out.println("Shape drawn");
} }
	class Triangle extends Shape {
		 @Override
		 void draw(){
			  System.out.println("Triangle drawn");
		 }
	}
	class Box extends Shape {
		 @Override
		 void draw(){
			  super.draw();
		 }
	}
	public class Exam {
		 public static void main(String[] args) {
			  Box s = new Box();
			  s.draw();
} }

*/

 public class DisplayOverloading
{
	public void disp(char c)
	{
		 System.out.println(c);
	}
	public void disp(char c, int num)  
	{
		 System.out.println(c + " "+num);
	}
}
public class ExampleOverloading
{
   public static void main(String args[])
   {
	   DisplayOverloading obj = new DisplayOverloading();
	   obj.disp('a');
	   obj.disp('a',10);
   }
}
















