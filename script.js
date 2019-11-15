

function clockAngle(h,m)
{
    if(h < 0 || m < 0 || h > 12 || m > 60)
    {
        return("Invalid input select an hour between (1-12) and minutes between (0-60)")
    }
    //calculate the degree position of the hand for hour
    hDegree = 30 * h;

    //calculates how far the hand is from zero 
    if(hDegree < 180)
    {
        hDifference = hDegree;
    }else
    {
        hDifference = 360- hDegree;
    }

    //calculate the degree of the minutes and if the minute hand is 12 it equals 0
    if(m == 60)
    {
        minute = 0;
    }
    //Calculates for every minute is 6 degrees 
    mDegree = 6 * m;


    //calculates how far the hand is from zero 
    if(mDegree < 180){
        mDiffrence = mDegree;
    
    }else{
        mDiffrence = 360 - mDegree;
    }

    //calculates the difference between the hour and minute hand
    handDifference = hDifference + mDiffrence;

    return handDifference;
}

console.log ("hand angle 12:30 = " + clockAngle(12,30));