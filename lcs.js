function lcs(  X,  Y , m , n )
{
    if (m == 0 || n == 0)
    return 0;
    if (X[m-1] == Y[n-1])
    return 1 + lcs(X, Y, m-1, n-1);
    else
    return Math.max(lcs(X, Y, m, n-1), lcs(X, Y, m-1, n));
}
    var s1 = "AGGTAB";
    var s2 = "GXTXAYB";
 
    var X=s1;
    var Y=s2;
    var m = X.length;
    var n = Y.length;
 
    console.log("Length of LCS is" + " " +lcs( X, Y, m, n ) );  
