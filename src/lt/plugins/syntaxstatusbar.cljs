(ns lt.plugins.syntaxstatusbar
  (:require [lt.objs.statusbar :as statusbar]
            [lt.object :as object]
            [lt.objs.command :as cmd]
            [lt.objs.editor :as editor]
            [lt.util.dom :as dom]
            [crate.binding :refer [bound map-bound]])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defui syntax-ui [syntax-name]
  [:span.editor-syntax syntax-name]
  :click (fn []
           (cmd/exec! :set-syntax)))

(defn ->syntax-html [{:keys [cur-ed] :as o}]
  (when cur-ed
    (syntax-ui (-> @cur-ed :info :type-name))))

(object/object* ::container
                :init (fn [this]
                        [:li
                         [:span
                          (bound this ->syntax-html)]]))

(def container (object/create ::container))

(statusbar/add-statusbar-item container)

(behavior ::attach
          :triggers #{:active}
          :reaction (fn [this]
                      (object/merge! container {:cur-ed this})))


