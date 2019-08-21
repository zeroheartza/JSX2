export default class BMI{
    bmiCalculate(w,h)
    {
      return w/h**2;
    }
    checkBmi(b,region)
    {
      // Alert.alert(region);
      if(region=='asia')
      {
        if(b<=18.5)
          return "Under weight";
        if(b>18.5 && b<=24.9)
          return "Normal weight";
        if(b>24.9 && b<=29.9)
          return "Overweight";
        if(b>29.9)
          return "Obesity";
      }
      if(region=='western')
      {
        if(b<=28.5)
          return "Under weight";
        if(b>28.5 && b<=34.9)
          return "Normal weight";
        if(b>34.9 && b<=39.9)
          return "Overweight";
        if(b>39.9)
          return "Obesity";
      }
    }
  }