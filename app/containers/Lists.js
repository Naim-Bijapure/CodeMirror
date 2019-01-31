
 const Folder= {
    ArraysLists:"ArraysLists",
    ArraysListsIteration:"ArraysListsIteration",
    CommandLineArguments:"CommandLineArguments",
    ExtensionMethods:"ExtensionMethods",
    FalsyValues:"FalsyValues",
    Functions:"Functions",
    HashMaps:"HashMaps",
    HelloWorld:"HelloWorld",
    HashMapsIteration:"HashMapsIteration",
    Ifs:"Ifs",
    Interpolation:"Interpolation",
    Loops:"Loops",
    SimpleClass:"SimpleClass",
    Variables:"Variables"
  }
  
  const Language= {
    Dart:"Dart",
    Go:"Go",
    Java:"Java",
    JavaScript:"JavaScript",
    Perl:"Perl",
    Python:"Python",
    Ruby:"Ruby",
    Scala:"Scala",
    TypeScript:"TypeScript"
  }
  
 const getFolder = (folder) => {
    switch(folder) {
      case Folder.ArraysLists:
        return "arrays_lists";
      case Folder.ArraysListsIteration:
        return "arrays_lists_iteration";
      case Folder.CommandLineArguments:
        return "command_line_arguments";
      case Folder.ExtensionMethods:
        return "extension_methods";
      case Folder.FalsyValues:
        return "falsy_values";
      case Folder.Functions:
        return "functions";
      case Folder.HashMaps:
        return "hash_maps";
      case Folder.HashMapsIteration:
        return "hash_maps_iteration";
      case Folder.HelloWorld:
        return "hello_world";
      case Folder.Ifs:
        return "ifs";
      case Folder.Interpolation:
        return "interpolation";
      case Folder.Loops:
        return "loops";
      case Folder.SimpleClass:
        return "simple_class";
      case Folder.Variables:
        return "variables";
    }
  };

 const getLanguage = (language) => {
    switch(language) {
      case Language.Dart:
        return "example.dart";
      case Language.Go:
        return "example.go";
      case Language.Java:
        return "Example.java";
      case Language.JavaScript:
        return "exampleJs.js";
      case Language.Perl:
        return "example.pl";
      case Language.Python:
        return "example.py";
      case Language.Ruby:
        return "example.rb";
      case Language.Scala:
        return "Example.scala";
      case Language.TypeScript:
        return "example.ts";
    }
  };


 const languageMenuItems= [
    {language:Language.JavaScript, text:"JavaScript"},
    {language:Language.Python, text:"Python"},
    {language:Language.Dart, text:"Dart"},
    {language:Language.Go, text:"Go"},
    {language:Language.Java, text:"Java"},
    {language:Language.Perl, text:"Perl"},
    {language:Language.Ruby, text:"Ruby"},
    {language:Language.Scala, text:"Scala"},
    {language:Language.TypeScript, text:"TypeScript"},
  ];

 const folderMenuItems = [
    {folder:Folder.ArraysLists, text:"Arrays/Lists"},
    {folder:Folder.ArraysListsIteration, text:"Arrays/Lists Iteration"},
    {folder:Folder.SimpleClass, text:"Classes"},
    {folder:Folder.CommandLineArguments, text:"CMD Line Arguments"},
    {folder:Folder.ExtensionMethods, text:"Extension Methods"},
    {folder:Folder.FalsyValues, text:"Falsy Values"},
    {folder:Folder.Functions, text:"Functions"},
    {folder:Folder.HashMaps, text:"Hash Maps"},
    {folder:Folder.HashMapsIteration, text:"Hash Maps Iteration"},
    {folder:Folder.HelloWorld, text:"Hello World"},
    {folder:Folder.Ifs, text:"If Statements"},
    {folder:Folder.Interpolation, text:"Interpolation"},
    {folder:Folder.Loops, text:"Loop Statements"},
    {folder:Folder.Variables, text:"Variables"}
  ];




  export{Language,Folder,languageMenuItems,folderMenuItems,getFolder,getLanguage }