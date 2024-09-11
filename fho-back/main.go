package main

import(
    "net/http"
//     "os"
)

func startHandler(w http.ResponseWriter, r *http.Request) {
    w.Write([]byte("<h1>Hello world</h1>"))
}

func main() {
    port := "3000" // add port from env
    mux := http.NewServeMux()
    mux.HandleFunc("/", startHandler)
    http.ListenAndServe(":"+port, mux)
}