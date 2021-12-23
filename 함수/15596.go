package main

import "fmt"

func sum(a []int) int {
	var r int
    for _,value := range a {
        r = r + value
    }
	return r
}

func main() {
	array := []int{1,2,3,4,5,6}
	fmt.Println(sum(array))
}